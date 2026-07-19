import { baseUrl } from "@/lib/utils";
import { profile } from "@/data/profile";

export default function GlobalJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: profile.name,
    jobTitle: profile.title,
    url: baseUrl,
    image: `${baseUrl}${profile.avatar}`,
    description: profile.tagline,
    sameAs: Object.values(profile.social),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: profile.name,
    url: baseUrl,
    publisher: { "@id": `${baseUrl}/#person` },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
