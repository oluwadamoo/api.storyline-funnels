"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const mongoose_1 = require("mongoose");
const contentSchema = new mongoose_1.Schema({
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
});
const headerCtaSchema = new mongoose_1.Schema({
    title: {
        type: String
    },
    link: {
        type: String
    }
});
const pageSchema = new mongoose_1.Schema({
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
});
pageSchema.statics.build = (attrs) => {
    return new Page(attrs);
};
const Page = (0, mongoose_1.model)('Page', pageSchema);
exports.Page = Page;
