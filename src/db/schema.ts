import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const loanApplications = pgTable("loan_applications", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  loanType: varchar("loan_type", { length: 50 }).notNull(),
  employerName: varchar("employer_name", { length: 255 }),
  monthlySalary: varchar("monthly_salary", { length: 100 }),
  businessName: varchar("business_name", { length: 255 }),
  cacNumber: varchar("cac_number", { length: 100 }),
  loanAmount: varchar("loan_amount", { length: 100 }).notNull(),
  repaymentPeriod: varchar("repayment_period", { length: 100 }).notNull(),
  purpose: text("purpose").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});