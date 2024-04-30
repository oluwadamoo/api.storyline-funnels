import { Document, Model, Schema, model } from "mongoose";

interface PageAttrs {
    headline: string;
    subheading: string;
    headerCta?: {
        title: string;
        link: string;
    };
    slug: string;
    description?: string;
    contents: {
        title: string;
        link?: string;
        content?: string;
        cards?: string[];
        dropdowns?: {
            label: string;
            details: string;
        }[];
        type: string;
    }[]

}

interface PageDoc extends Document {
    headline: string;
    subheading: string;
    headerCta?: {
        title: string;
        link: string;
    };

    slug: string;
    description?: string;
    contents: {
        title: string;
        link?: string;
        content?: string;
        cards?: string[];
        dropdowns?: {
            label: string;
            details: string;
        }[];
        type: string;
    }[]

    createdAt: string;
}




interface PageModel extends Model<PageDoc> {
    build(attrs: PageAttrs): PageDoc;
}

const contentSchema = new Schema({
    title: {
        type: String,
    },
    link: {
        type: String,
    },
    content: {
        type: String
    },
    cards: [{ type: String }],
    dropdowns: [
        {
            label: {
                type: String
            },
            details: {
                type: String
            },
        }
    ],
    type: {
        type: String
    }

})

const headerCtaSchema = new Schema({
    title: {
        type: String
    },
    link: {
        type: String
    }
})
const pageSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true

    },

    subheading: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    headerCta: headerCtaSchema,
    contents: [contentSchema]

}, {
    toJSON: {
        transform(_, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    },
    timestamps: true
})




pageSchema.statics.build = (attrs: PageAttrs) => {
    return new Page(attrs);
}

const Page = model<PageDoc, PageModel>('Page', pageSchema);

export { Page };