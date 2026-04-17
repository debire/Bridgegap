"use server";

import { db } from "@/db";
import { loanApplications, contactSubmissions } from "@/db/schema";
import { loanApplicationSchema, contactSchema } from "@/lib/validations";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const loanTypeLabels = {
      traders: "Traders Loan",
      corporate: "Corporate Loan",
      business: "Business Loan",
    };

    await resend.emails.send({
      from: "BridgeGap Capital <onboarding@resend.dev>",
      to: process.env.LOANS_EMAIL!,
      subject: `New Loan Application — ${loanTypeLabels[parsed.data.loanType]}`,
      html: `
        <h2>New Loan Application</h2>
        <p><strong>Name:</strong> ${parsed.data.fullName}</p>
        <p><strong>Phone:</strong> ${parsed.data.phone}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        <p><strong>Loan Type:</strong> ${loanTypeLabels[parsed.data.loanType]}</p>
        ${parsed.data.employerName ? `<p><strong>Employer:</strong> ${parsed.data.employerName}</p>` : ""}
        ${parsed.data.monthlySalary ? `<p><strong>Monthly Salary:</strong> ${parsed.data.monthlySalary}</p>` : ""}
        ${parsed.data.businessName ? `<p><strong>Business Name:</strong> ${parsed.data.businessName}</p>` : ""}
        ${parsed.data.cacNumber ? `<p><strong>CAC Number:</strong> ${parsed.data.cacNumber}</p>` : ""}
        <p><strong>Loan Amount:</strong> ${parsed.data.loanAmount}</p>
        <p><strong>Repayment Period:</strong> ${parsed.data.repaymentPeriod}</p>
        <p><strong>Purpose:</strong> ${parsed.data.purpose}</p>
      `,
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

    await resend.emails.send({
      from: "BridgeGap Capital <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact Message from ${parsed.data.firstName} ${parsed.data.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${parsed.data.firstName} ${parsed.data.lastName}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        <p><strong>Phone:</strong> ${parsed.data.phone}</p>
        <p><strong>Message:</strong> ${parsed.data.message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}