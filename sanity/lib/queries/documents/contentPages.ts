import { groq } from "next-sanity";
import { seo } from "../fragments/seo";

export const contentPageQuery = groq`*[_type == 'contentPage'][0]{
  _id,
    title,
    slug,
    content,
    showInMenu,
    menuOrder
  ${seo}
}`