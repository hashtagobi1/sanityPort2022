export default {
    name: 'skill',
    title: 'skill',
    type: 'document',
    fields: [
        {
            name: "title",
            title: "Title",
            descripion: "Title of Skill",
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
            name: "yearsExperience",
            title: "Years Experience",
            type:"number",
        },
    ]
}