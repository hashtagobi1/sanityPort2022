export default {
  name: 'pageInfo',
  title: 'pageInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "about",
      title: "about",
      type: "text"

    },
    {
      name: 'typeWriterText',
      title: 'typeWriterText',
      type: 'string',
    },
    {
      name: "heroImage",
      title: "heroImge",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string"
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "address",
      title: "Address",
      type: "string"
    },
    {
      name: "socials",
      title: "socials",
      type: "array",
      of: [{
        type: "reference",
        to: { type: "social" }
      }]
    }
  ],
}
