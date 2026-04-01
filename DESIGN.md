# Design System Document

## 1. Overview & Creative North Star

### Creative North Star: "The Architectural Guardian"
This design system moves away from the utilitarian "yellow-page" aesthetic common in the locksmith industry. Instead, it adopts the persona of an **Architectural Guardian**. It is precise, authoritative, and sophisticated. We leverage the Swedish heritage of functional minimalism combined with high-contrast, editorial layouts to create an experience that feels as secure as the locks the company installs.

The system breaks away from standard templates by using **Intentional Asymmetry**. We utilize oversized typography, overlapping image containers, and a rigorous adherence to tonal depth rather than structural lines. The goal is to convey "Modern Security" through a premium digital interface that prioritizes speed of action and absolute trust.

---

## 2. Colors

The palette is rooted in a high-contrast relationship between deep ochre-golds and charcoal blacks, providing an immediate sense of professional authority.

### Color Tokens
*   **Primary (`#795900`):** The "Safety Gold." Used for primary brand moments and key interactions.
*   **Primary Container (`#fbc02d`):** A high-visibility yellow for CTAs and urgent alerts.
*   **Background (`#fcf9f8`):** An "off-white" gallery bone color that feels more premium and less sterile than pure white.
*   **Surface Hierarchy:**
    *   `surface`: Base background.
    *   `surface-container-low`: Used for secondary sectioning.
    *   `surface-container-highest`: Used for deep charcoal footers or high-contrast header sections.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Sectioning must be achieved through background color shifts. For example, a service list in `surface-container-lowest` should sit on a `surface-container-low` background. This creates a "molded" look rather than a "sketched" look.

### The "Glass & Gradient" Rule
To elevate the "Modern" requirement, floating cards (like emergency contact overlays) should use **Glassmorphism**. Use a semi-transparent `surface` color with a `backdrop-filter: blur(20px)`. This mimics the precision of high-end security hardware.

### Signature Textures
Main CTAs (Call-to-Actions) should employ a subtle linear gradient from `primary` to `primary_container` (angled at 135°) to give buttons a tactile, metallic "soul" that flat colors cannot replicate.

---

## 3. Typography

The typography strategy pairs a utilitarian sans-serif for reading with a high-character geometric grotesque for headlines.

*   **Display & Headline (Space Grotesk):** This font carries the "Modern" weight. Its industrial, slightly tech-leaning curves suggest precision engineering. Headlines should always be bold (`weight: 700`) and use tight letter-spacing (`-0.02em`) to feel like an editorial headline.
*   **Body & Labels (Manrope):** A highly legible, modern sans-serif. Manrope provides a neutral, trustworthy counter-balance to the aggressive headlines.
*   **Hierarchical Purpose:**
    *   **Display-LG (`3.5rem`):** Reserved for urgent hero statements (e.g., "Låst ute?").
    *   **Title-MD (`1.125rem`):** Used for service categories to ensure high scannability.
    *   **Label-MD (`0.75rem`):** Used for metadata like "Estimerad ankomsttid."

---

## 4. Elevation & Depth

We move beyond "shadows as borders" and embrace **Tonal Layering**.

### The Layering Principle
Depth is achieved by stacking surface tokens.
1.  **Level 0:** `surface` (The floor)
2.  **Level 1:** `surface-container-low` (Content groupings)
3.  **Level 2:** `surface-container-lowest` (Interactive cards/inputs)

### Ambient Shadows
When an element must float (e.g., a "Boka nu" sticky button), use an **Ambient Shadow**:
*   `box-shadow: 0 20px 40px rgba(27, 28, 28, 0.06);`
The shadow must be barely perceptible, mimicking natural light hitting a matte surface.

### The "Ghost Border" Fallback
If accessibility requires a border, use the `outline_variant` token at **15% opacity**. This creates a "Ghost Border" that guides the eye without cluttering the visual field.

---

## 5. Components

### Buttons (Knappar)
*   **Primary:** Fill: Gradient `primary` to `primary_container`. Text: `on_primary` (Bold). Shape: `md` (0.375rem).
*   **Secondary:** Fill: `transparent`. Border: 1.5px "Ghost Border" `outline_variant`.
*   **Emergency CTA:** High-contrast `primary_container` with a "pulsing" ambient shadow.

### Input Fields (Inmatningsfält)
*   **Style:** No bottom line only. Use a solid block fill of `surface_container_high`.
*   **States:** On focus, the background shifts to `surface_container_lowest` with a 2px `primary` left-edge accent—conveying a "locked-in" focus state.

### Cards & Lists
*   **Prohibition:** Never use divider lines between list items. Use vertical white space (`spacing-6`) to separate services.
*   **Recent Projects:** Image containers must use the `xl` (0.75rem) roundedness to soften the industrial imagery, with labels positioned as absolute overlays in the bottom-left corner using a glassmorphic background.

### Security Badges (Chips)
*   Used for status updates (e.g., "Certifierad", "24/7 Tillgänglig").
*   **Styling:** Semi-pill shape (`full`), background: `secondary_container`, text: `on_secondary_container` (Label-SM).

---

## 6. Do's and Don'ts

### Do
*   **DO** use Swedish terminology exclusively (e.g., "Låssmed", "Säkerhet", "Jour").
*   **DO** use high-resolution imagery of metal textures, locks, and professional technicians in uniform.
*   **DO** use generous white space. If in doubt, increase the spacing by one tier in the scale.
*   **DO** align CTA buttons to a clear vertical axis to create a "path of action."

### Don't
*   **DON'T** use standard blue for links. Use `primary` or `on_surface`.
*   **DON'T** use sharp 90-degree corners. The `DEFAULT` (0.25rem) is the minimum to keep the brand feeling "modern" rather than "brutal."
*   **DON'T** use generic stock photos of "happy people holding keys." Use macro shots of hardware or candid, professional "work-in-progress" photography.
*   **DON'T** use 100% black. Always use `on_surface` (`#1b1c1c`) for text to maintain a premium, ink-like depth.