GIISA CMS Models

Stack

- Astro
- Strapi CMS
- Cloudflare Pages

⸻

Components

Shared/Button

Field Type
text Short Text
url Short Text
openInNewTab Boolean

⸻

Shared/SEO

Field Type
metaTitle Short Text
metaDescription Long Text
ogImage Media (Single Image)

⸻

Shared/Hero

Field Type
title Short Text
subtitle Long Text
backgroundImage Media
button Component (Button)

⸻

Shared/CTA

Field Type
title Short Text
description Long Text
button Component (Button)

⸻

Shared/SectionHeader

Field Type
title Short Text
subtitle Long Text

⸻

Shared/RichText

Field Type
content Rich Text

⸻

Single Types

- Home
- About
- Contact

⸻

Collections

- Service
- Project

⸻

Roles

Admin

- Full access

Editor

- Create content
- Edit content
- Publish content
- Upload media

No access to:

- Users
- Plugins
- Settings

⸻

Publishing Flow

Editor

↓

Save Draft

↓

Publish

↓

Webhook

↓

Cloudflare Pages Build

↓

Astro Static Site Updated
