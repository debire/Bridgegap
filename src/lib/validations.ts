import { z } from "zod";

export const loanApplicationSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    phone: z.string().min(7, "Valid phone number is required"),
    email: z.string().email("Valid email is required"),
    loanType: z.enum(["traders", "corporate", "business"]),
    employerName: z.string().optional(),
    monthlySalary: z.string().optional(),
    businessName: z.string().optional(),
    cacNumber: z.string().optional(),
    loanAmount: z.string().min(1, "Loan amount is required"),
    repaymentPeriod: z.string().min(1, "Repayment period is required"),
    purpose: z.string().min(5, "Purpose of loan is required"),
  })
  .refine(
    (data) => {
      if (data.loanType === "corporate") {
        return !!data.employerName && !!data.monthlySalary;
      }
      return true;
    },
    { message: "Employer name and monthly salary are required for corporate loans", path: ["employerName"] }
  )
  .refine(
    (data) => {
      if (data.loanType === "business") {
        return !!data.businessName && !!data.cacNumber;
      }
      return true;
    },
    { message: "Business name and CAC number are required for business loans", path: ["businessName"] }
  );

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Valid phone number is required"),
  message: z.string().min(5, "Message is required").max(100, "Message must be 100 characters or less"),
});

export type LoanApplicationInput = z.infer<typeof loanApplicationSchema>;
export type ContactInput = z.infer<typeof contactSchema>;