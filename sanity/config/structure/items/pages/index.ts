import { FiFolder } from "react-icons/fi";
import { StructureBuilder } from "sanity/structure";
import { BlogItem } from "./blog";
import { ContentpageItem } from "./contentTypes";
import { CaseStudiesItem } from "./case-studies";
import { ContactItem } from "./contact";
import { PrivacyItem } from "./privacy";
import { TermsItem } from "./terms";
import { HomeItems } from "./home";

export const PagesItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Pages')
    .icon(FiFolder)
    .child(
      S.list()
        .title('Pages')
        .items([
          HomeItems(S),
          S.divider(),
          BlogItem(S),
          ContentpageItem(S),
          CaseStudiesItem(S),
          ContactItem(S),
          S.divider(),
          PrivacyItem(S),
          TermsItem(S)
        ])
    )