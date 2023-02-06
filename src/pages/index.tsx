import Head from "next/head";

import LayoutRoot from "@/components/layout/LayoutRoot";
import ContentStart from "@/components/content/ContentStart";
import Supporting from "@/components/content/Supporting";
import ContentFullstack from "@/components/content/ContentFullstack";
import ContentLargerIssues from "@/components/content/ContentLargerIssue";
import ContentManagementTools from "@/components/content/ContentManagementTools";
import ContentCommunity from "@/components/content/ContentCommunity";
import ContentSoftware from "@/components/content/ContentSoftware";

export default function Home() {
  return (
    <>
      <Head>
        <title>TheProgrammer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutRoot>
        <main className="overflow-hidden">
          <ContentStart />
          <Supporting />
          <ContentFullstack />
          <ContentLargerIssues />
          <ContentManagementTools />
          <ContentSoftware />
          <ContentCommunity />
        </main>
      </LayoutRoot>
    </>
  );
}
