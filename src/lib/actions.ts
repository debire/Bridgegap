"use server";

import { db } from "@/db";
import { loanApplications, contactSubmissions } from "@/db/schema";
import { loanApplicationSchema, contactSchema } from "@/lib/validations";
import { Resend } from "resend";
import { LoanApplicationEmail, ContactFormEmail } from "@/lib/emails";
import { render } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

const loanTypeLabels = {
  traders: "Traders Loan",
  corporate: "Corporate Loan",
  business: "Business Loan",
} as const;

export async function submitLoanApplication(data: unknown) {
  const parsed = loanApplicationSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." };
  }

  try {
    await db.insert(loanApplications).values({
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email,
      loanType: parsed.data.loanType,
      employerName: parsed.data.employerName || null,
      monthlySalary: parsed.data.monthlySalary || null,
      businessName: parsed.data.businessName || null,
      cacNumber: parsed.data.cacNumber || null,
      loanAmount: parsed.data.loanAmount,
      repaymentPeriod: parsed.data.repaymentPeriod,
      purpose: parsed.data.purpose,
    });

    const emailHtml = await render(
      LoanApplicationEmail({
        fullName: parsed.data.fullName,
        phone: parsed.data.phone,
        email: parsed.data.email,
        loanType: loanTypeLabels[parsed.data.loanType],
        employerName: parsed.data.employerName,
        monthlySalary: parsed.data.monthlySalary,
        businessName: parsed.data.businessName,
        cacNumber: parsed.data.cacNumber,
        loanAmount: parsed.data.loanAmount,
        repaymentPeriod: parsed.data.repaymentPeriod,
        purpose: parsed.data.purpose,
      })
    );

    await resend.emails.send({
      from: "BridgeGap Capital <onboarding@resend.dev>",
      to: process.env.LOANS_EMAIL!,
      subject: `New Loan Application — ${loanTypeLabels[parsed.data.loanType]} — ${parsed.data.fullName}`,
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Loan application error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function submitContactForm(data: unknown) {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." };
  }

  try {
    await db.insert(contactSubmissions).values({
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      message: parsed.data.message,
    });

    const emailHtml = await render(
      ContactFormEmail({
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        message: parsed.data.message,
      })
    );

    await resend.emails.send({
      from: "BridgeGap Capital <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact Message from ${parsed.data.firstName} ${parsed.data.lastName}`,
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}