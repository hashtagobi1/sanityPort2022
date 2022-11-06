export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "link",
      title: "Link",
      type: "url"
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    },
    {
      name: "order",
      title: "Order",
      type: "number"
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "isCurrentlyWorkingHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{
        type: "reference",
        to: { type: "skill" }
      }]
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }]
    },
  ]
}