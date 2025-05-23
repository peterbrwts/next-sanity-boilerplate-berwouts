import { FiFile } from "react-icons/fi";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureBuilder } from "sanity/structure";

export const ContentpageItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Content types')
    .icon(FiFile)
    .child(
      S.document()
        .schemaType('contentPage')
        .documentId('contentPage')
        .title('Content Page')
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .title('Preview')
            .options({
              url: (doc: any) => doc?.slug?.current 
              ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=case-studies`
              : `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=case-studies`,
            })
            .title('Preview'),
        ])
      )