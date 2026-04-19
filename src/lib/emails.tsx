import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Img,
} from "@react-email/components";

interface LoanEmailProps {
  fullName: string;
  phone: string;
  email: string;
  loanType: string;
  employerName?: string | null;
  monthlySalary?: string | null;
  businessName?: string | null;
  cacNumber?: string | null;
  loanAmount: string;
  repaymentPeriod: string;
  purpose: string;
}

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const headerStyle = {
  backgroundColor: "#1E1D45",
  padding: "30px 40px",
  borderRadius: "12px 12px 0 0",
};

const logoTextStyle = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "700" as const,
  margin: "0",
  fontFamily: "Arial, sans-serif",
};

const taglineStyle = {
  color: "rgba(255,255,255,0.7)",
  fontSize: "12px",
  margin: "4px 0 0 0",
  fontStyle: "italic" as const,
  fontFamily: "Arial, sans-serif",
};

const bodyStyle = {
  backgroundColor: "#F5F7FA",
  padding: "40px 0",
  fontFamily: "Arial, sans-serif",
};

const containerStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  overflow: "hidden" as const,
  maxWidth: "600px",
  margin: "0 auto",
  border: "1px solid #e5e7eb",
};

const contentStyle = {
  padding: "30px 40px",
};

const titleStyle = {
  color: "#1E1D45",
  fontSize: "20px",
  fontWeight: "700" as const,
  margin: "0 0 20px 0",
  fontFamily: "Arial, sans-serif",
};

const labelStyle = {
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: "600" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "16px 0 4px 0",
  fontFamily: "Arial, sans-serif",
};

const valueStyle = {
  color: "#1f2937",
  fontSize: "15px",
  margin: "0",
  fontFamily: "Arial, sans-serif",
};

const hrStyle = {
  borderColor: "#e5e7eb",
  margin: "20px 0",
};

const footerStyle = {
  backgroundColor: "#1E1D45",
  padding: "24px 40px",
  borderRadius: "0 0 12px 12px",
};

const footerTextStyle = {
  color: "rgba(255,255,255,0.8)",
  fontSize: "12px",
  margin: "0",
  lineHeight: "20px",
  fontFamily: "Arial, sans-serif",
};

const footerLabelStyle = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "700" as const,
  margin: "0 0 8px 0",
  fontFamily: "Arial, sans-serif",
};

export function LoanApplicationEmail(props: LoanEmailProps) {
  const {
    fullName,
    phone,
    email,
    loanType,
    employerName,
    monthlySalary,
    businessName,
    cacNumber,
    loanAmount,
    repaymentPeriod,
    purpose,
  } = props;

  return (
    <Html>
      <Head />
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerStyle}>
            <Text style={logoTextStyle}>Bridge Gap Capital</Text>
            <Text style={taglineStyle}>Your Growth, Our Commitment.</Text>
          </Section>

          {/* Content */}
          <Section style={contentStyle}>
            <Text style={titleStyle}>New Loan Application</Text>
            <Text style={{ ...valueStyle, color: "#6b7280", marginBottom: "24px" }}>
              A new loan application has been submitted through the website.
            </Text>

            <Hr style={hrStyle} />

            <Text style={labelStyle}>Applicant Name</Text>
            <Text style={valueStyle}>{fullName}</Text>

            <Text style={labelStyle}>Phone Number</Text>
            <Text style={valueStyle}>{phone}</Text>

            <Text style={labelStyle}>Email Address</Text>
            <Text style={valueStyle}>{email}</Text>

            <Text style={labelStyle}>Loan Type</Text>
            <Text style={{ ...valueStyle, color: "#FF5D58", fontWeight: "600" }}>{loanType}</Text>

            {employerName && (
              <>
                <Text style={labelStyle}>Employer Name</Text>
                <Text style={valueStyle}>{employerName}</Text>
              </>
            )}

            {monthlySalary && (
              <>
                <Text style={labelStyle}>Monthly Salary</Text>
                <Text style={valueStyle}>{monthlySalary}</Text>
              </>
            )}

            {businessName && (
              <>
                <Text style={labelStyle}>Business Name</Text>
                <Text style={valueStyle}>{businessName}</Text>
              </>
            )}

            {cacNumber && (
              <>
                <Text style={labelStyle}>CAC Number</Text>
                <Text style={valueStyle}>{cacNumber}</Text>
              </>
            )}

            <Hr style={hrStyle} />

            <Text style={labelStyle}>Loan Amount</Text>
            <Text style={{ ...valueStyle, fontSize: "18px", fontWeight: "700", color: "#1E1D45" }}>
              {loanAmount}
            </Text>

            <Text style={labelStyle}>Repayment Period</Text>
            <Text style={valueStyle}>{repaymentPeriod}</Text>

            <Text style={labelStyle}>Purpose of Loan</Text>
            <Text style={{ ...valueStyle, lineHeight: "22px" }}>{purpose}</Text>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerLabelStyle}>BridgeGap Capital Ltd</Text>
            <Text style={footerTextStyle}>
              3, Eniola Street, off Olaniyi Street, Idi-Oro, Mushin, Lagos
            </Text>
            <Text style={footerTextStyle}>
              Phone: +234 8026071375
            </Text>
            <Text style={{ ...footerTextStyle, marginTop: "12px", fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
              This is an automated notification from the BridgeGap Capital website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export function ContactFormEmail(props: ContactEmailProps) {
  const { firstName, lastName, email, phone, message } = props;

  return (
    <Html>
      <Head />
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerStyle}>
            <Text style={logoTextStyle}>Bridge Gap Capital</Text>
            <Text style={taglineStyle}>Your Growth, Our Commitment.</Text>
          </Section>

          {/* Content */}
          <Section style={contentStyle}>
            <Text style={titleStyle}>New Contact Form Message</Text>
            <Text style={{ ...valueStyle, color: "#6b7280", marginBottom: "24px" }}>
              Someone has reached out through the contact form on the website.
            </Text>

            <Hr style={hrStyle} />

            <Text style={labelStyle}>Name</Text>
            <Text style={valueStyle}>{firstName} {lastName}</Text>

            <Text style={labelStyle}>Email Address</Text>
            <Text style={valueStyle}>{email}</Text>

            <Text style={labelStyle}>Phone Number</Text>
            <Text style={valueStyle}>{phone}</Text>

            <Hr style={hrStyle} />

            <Text style={labelStyle}>Message</Text>
            <Text style={{ ...valueStyle, lineHeight: "24px", backgroundColor: "#F5F7FA", padding: "16px", borderRadius: "8px" }}>
              {message}
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerLabelStyle}>BridgeGap Capital Ltd</Text>
            <Text style={footerTextStyle}>
              3, Eniola Street, off Olaniyi Street, Idi-Oro, Mushin, Lagos
            </Text>
            <Text style={footerTextStyle}>
              Phone: +234 8026071375
            </Text>
            <Text style={{ ...footerTextStyle, marginTop: "12px", fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
              This is an automated notification from the BridgeGap Capital website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}