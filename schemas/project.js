export default {
    name: 'project',
    title: 'project',
    type: 'document',
    fields: [
        {
            name: "title",
            title: "Title",
            descripion: "Title of project",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "summary",
            title: "Summary",
            type: "text",
        },
        {
            name: "linkToBuild",
            title: "Link to Build",
            type: "url",
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
    ],
}