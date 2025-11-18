import SectionTitle from "../Common/SectionTitle";

const useCasesData = [
  {
    category: "Administrative",
    items: [
      "Automated Document Processing",
      "Scheduling & Calendar Management",
      "Email & Communications Filtering",
      "Workflow Automation",
      "Smart Assistants",
    ],
  },
  {
    category: "Human Resources",
    items: [
      "Talent Sourcing & Screening",
      "Employee Engagement",
      "Onboarding & Training",
      "Performance Evaluation",
      "Predictive Workforce Planning",
    ],
  },
  {
    category: "Finance",
    items: [
      "Accounts Payable Automation",
      "Expense Management",
      "Tax Calculation",
      "Financial Forecasting",
      "Credit Scoring",
    ],
  },
  {
    category: "Marketing & Sales",
    items: [
      "Content Generation",
      "Targeted Campaigns",
      "Lead Scoring & Nurturing",
      "Customer Insights",
      "Chatbots & Virtual Assistants",
    ],
  },
  {
    category: "Security",
    items: [
      "Fraud Detection",
      "Real-time Threat Detection",
      "Automated Security Audits",
      "Data Encryption & Access Control",
    ],
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="bg-white py-16 dark:bg-gray-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Use Cases"
          subtitle="Real-World AI Applications"
          paragraph=""
          center
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {useCasesData.map((category, index) => (
            <div
              key={index}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-4 text-xl font-semibold text-black transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-body-color flex items-start gap-2 text-sm leading-relaxed dark:text-body-color-dark"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

