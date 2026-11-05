# Build Plan — Punish Your Boyfriend 😈

## 1. Project Overview

Build a small, polished, anime-inspired interactive web application called **Punish Your Boyfriend**.

The concept is intentionally simple.

Maria opens a webpage and sees two anime characters:
- A boyfriend who looks apologetic, embarrassed, and slightly scared.
- A girlfriend who looks visibly angry.

Below them is a large circular slap button featuring a slapping-hand icon.

Every time Maria presses the button, the girlfriend slaps the boyfriend. The boyfriend shakes, recoils, and briefly recovers before returning to his original position.

The user can press the button repeatedly without restrictions.

The application should feel like a cute, funny, polished mini-game rather than a generic website.

### Fundamental philosophy

Keep the engineering simple, but invest effort in:
1. Character artwork.
2. Animation quality.
3. Sound effects.
4. Overall visual polish.

Do not overengineer this project.

---

## 2. Technology Stack

Use:

- Vite
- Vanilla JavaScript
- HTML5
- CSS3

Do not use:
- React
- Next.js
- Backend services
- Databases
- Authentication
- External APIs
- Unnecessary dependencies

The application must be entirely frontend-based and deployable as a static website.

---

## 3. Reference Artwork

The project directory will contain image sheets generated specifically for this application.

These sheets contain visual references for:
- Boyfriend character.
- Girlfriend character.
- Girlfriend's slapping arm.
- Different character expressions.
- Boyfriend reaction poses.
- Impact bursts.
- Speed lines.
- Other comic-style effects.

### Instructions for Claude Code

Before implementing the character assets:

1. Inspect the project directory and locate all supplied reference image sheets.
2. Open and visually inspect the complete sheets.
3. Identify individual characters, body parts, expressions, and effects.
4. Determine which elements can be extracted and reused.
5. Crop individual elements where appropriate.
6. Remove unwanted backgrounds and produce transparent PNG assets.
7. Preserve the original reference sheets.
8. Maintain consistent character proportions, colors, and visual style.
9. Do not distort, stretch, or unnecessarily modify the original artwork.

Important:

The supplied sheets are reference collages, not necessarily production-ready transparent sprite sheets.

Do not assume they already contain clean transparent backgrounds.

Use appropriate image-processing tools available in the development environment when necessary.

If automatic background removal produces poor results, prioritize clean character silhouettes over aggressive removal that damages the artwork.

If individual body-part extraction creates visible artifacts, use complete character illustrations and animate them using CSS instead.

Do not spend excessive time attempting perfect asset separation.

The application must remain functional even if some optional artwork assets cannot be extracted.

Document any missing or imperfect assets.

---

## 4. Main Screen Design

The entire application consists of one screen.

### 4.1 Header

Display:

**PUNISH YOUR BOYFRIEND**

Subtitle:

"A little apology won't save you."

Design:
- Playful typography.
- Bold title.
- Friendly, humorous presentation.
- No unnecessary navigation elements.

### 4.2 Character Area

Display two full-body anime characters side by side.

**Boyfriend — LEFT**

Visual characteristics:
- Positioned on the left.
- Facing RIGHT, toward the girlfriend.
- Apologetic facial expression.
- Slightly scared and embarrassed.
- Nervous body language.

Default expression:
"I'm sorry... 🥺"

**Girlfriend — RIGHT**

Visual characteristics:
- Positioned on the right.
- Facing LEFT, toward the boyfriend.
- Angry facial expression.
- Confident, slightly intimidating posture.
- Ready to slap him.

Default expression:
"Hmph! 😤"

Both characters must:
- Have transparent backgrounds where possible.
- Maintain consistent art styles and visual proportions.
- Be clearly visible.
- Occupy a significant portion of the screen.

Use the supplied artwork as the primary visual source.

Do not substitute emojis or generic illustrations for the actual characters.

### 4.3 Slap Button

Place a large circular button below the characters, horizontally centered.

Visual requirements:
- Large circular shape.
- Red/pink background.
- White slapping-hand/palm icon.
- Subtle shadow and depth.
- Attractive hover effect.
- Pressed-down animation.
- Label: "SLAP!"

The icon should communicate an open palm/slapping gesture.

Use a custom SVG or another lightweight vector solution if the reference artwork does not contain a suitable icon.

The button must remain clickable during animations.

---

## 5. Character Animation

This is the application's primary feature.

Use a hybrid animation approach:
- CSS transforms.
- CSS keyframes.
- Layered character artwork where practical.
- Image-based or CSS-generated impact effects.

Avoid complicated animation libraries unless genuinely necessary.

### 5.1 Idle State

Both characters remain in their original positions.

The boyfriend looks apologetic.

The girlfriend looks angry.

Optional subtle idle animations:
- Slight breathing movement.
- Very subtle hair or body movement.
- Small nervous movements from the boyfriend.

Keep idle animations subtle. The slap should remain the visual centerpiece.

### 5.2 Slap Sequence

When the user presses the slap button:

**Phase 1 — Wind-up**
- The girlfriend prepares to slap.
- Her slapping arm moves backward slightly.

**Phase 2 — Attack**
- Her arm swings forward rapidly.
- Use rotation and translation around the shoulder joint.
- The movement should feel quick and satisfying.

**Phase 3 — Impact**
- The boyfriend shakes violently for a brief moment.
- His body recoils slightly.
- Impact streaks or a comic-style burst appear.
- Play the cartoon slap sound effect.

**Phase 4 — Recovery**
- The boyfriend briefly tilts or recoils.
- Optionally display a dizzy or stunned expression.
- His body returns to its original position.

**Phase 5 — Idle**
- Both characters return to their original idle states.
- The application is ready for another slap.

Target total animation duration: approximately 500–700 ms.

The animation should feel responsive, comedic, and satisfying.

### 5.3 Repeated Slaps

This is a critical requirement.

Maria must be able to spam the slap button.

Requirements:
- Never disable the button during animation.
- Never ignore clicks because an animation is running.
- Every click should trigger a new slap reaction.
- Sound effects should trigger on every click.
- Repeated animations must not accumulate transforms.
- Character elements must return to their original positions.
- Previous animation states must be reset safely before retriggering.

Implement a reliable animation-retriggering mechanism.

Do not allow animation overlap to permanently corrupt character positions or states.

If multiple clicks happen rapidly, prioritize responsiveness and ensure the latest interaction produces a visible reaction.

---

## 6. Sound Effects

Include a cartoon slap sound effect.

Requirements:
- Play on every slap.
- Store audio locally.
- Do not use external audio APIs.
- Handle browser autoplay restrictions.
- Initialize playback through user interaction.
- Support rapid repeated playback.

Use audio cloning or an audio pool if necessary to support overlapping sound effects.

No background music is required.

If a suitable audio file is unavailable, create a simple synthesized cartoon slap/pop sound using the Web Audio API.

Do not leave the application silently pretending that sound playback works.

---

## 7. Visual Design

Overall aesthetic:

**Modern anime comedy.**

Characteristics:
- Expressive anime faces.
- Clean linework.
- Detailed hair.
- Polished cel shading.
- Exaggerated reactions.
- Playful color palette.

### Background

Use a soft pink or pastel background.

The background should complement the character artwork without competing with it.

### Layout

- Header at the top.
- Characters in the central area.
- Boyfriend on the left.
- Girlfriend on the right.
- Large circular slap button below them.

The characters should be the primary visual focus.

Avoid:
- Corporate dashboard aesthetics.
- Excessive menus.
- Unnecessary UI elements.
- Excessive gradients.
- Unrelated animations.
- Cluttered composition.

The application should work on desktop browsers and scale gracefully to smaller screens.

Desktop is the primary design target, not mobile-first.

---

## 8. Suggested Project Structure

Use the following structure as a starting point:

punish-your-boyfriend/
│
├── reference-assets/
│   └── (supplied reference image sheets)
│
├── public/
│   └── assets/
│       ├── characters/
│       │   ├── boyfriend/
│       │   └── girlfriend/
│       │
│       ├── effects/
│       │
│       └── audio/
│
├── src/
│   ├── styles/
│   │   └── animations.css
│   │
│   ├── main.js
│   └── style.css
│
├── index.html
├── package.json
├── README.md
└── build_plan.md

Adjust the structure if a better organization is justified.

Keep the original reference sheets separate from the processed assets.

Use descriptive filenames for extracted artwork.

---

## 9. Technical Requirements

- Clean, maintainable JavaScript.
- Semantic HTML where appropriate.
- CSS variables for reusable design values.
- No unnecessary global variables.
- No unnecessary dependencies.
- No backend communication.
- No database.
- No authentication.
- No analytics or tracking.
- No external APIs.
- All essential assets should be locally hosted.
- Correct asset paths.
- No broken images.
- No console errors.
- Successful Vite production build.

Ensure the application works after deployment to a static hosting provider.

---

## 10. Development Workflow

Work autonomously.

Do not repeatedly request approval for minor design decisions.

Follow this sequence:

### Phase 1 — Project Inspection
- Inspect the existing directory.
- Locate and inspect reference image sheets.
- Initialize Vite if necessary.
- Identify available image-processing tools.
- Plan the asset extraction process.

### Phase 2 — Asset Preparation
- Extract boyfriend artwork.
- Extract girlfriend artwork.
- Extract the slapping arm if practical.
- Extract useful expressions and reactions.
- Extract impact effects.
- Clean up backgrounds.
- Optimize assets.
- Document any assets that could not be extracted cleanly.

### Phase 3 — Static Interface
- Implement the page layout.
- Add the header.
- Integrate both characters.
- Implement the circular slap button.
- Establish correct character positioning and proportions.

At this stage, the application should already look visually appealing.

### Phase 4 — Animation
- Implement girlfriend's arm movement.
- Implement boyfriend's impact reaction.
- Add impact effects.
- Add recovery animation.
- Implement reliable animation retriggering.

### Phase 5 — Sound
- Integrate the slap sound.
- Implement repeated playback.
- Handle browser audio restrictions.
- Test rapid consecutive clicks.

### Phase 6 — Polish
- Improve typography.
- Refine spacing.
- Improve button interactions.
- Add subtle idle animations if appropriate.
- Verify desktop and smaller-screen layouts.

### Phase 7 — Testing
- Run the application.
- Test the complete slap sequence.
- Test rapid consecutive clicks.
- Verify sound playback.
- Verify animation reset behavior.
- Check for broken assets.
- Run the production build.
- Fix all errors.

---

## 11. Acceptance Criteria

The project is complete when:

1. The application opens without errors.
2. The title and subtitle are displayed.
3. Both anime characters are visible.
4. The boyfriend is on the left, facing right.
5. The girlfriend is on the right, facing left.
6. The boyfriend looks apologetic.
7. The girlfriend looks angry.
8. The large circular slap button is visible.
9. The button contains a recognizable slapping-hand icon.
10. Clicking the button triggers the slap sequence.
11. The girlfriend's arm moves convincingly.
12. The boyfriend visibly reacts to the impact.
13. Impact effects appear.
14. The slap sound plays.
15. The boyfriend briefly recovers.
16. Both characters return to their original positions.
17. Rapid consecutive clicks work reliably.
18. The button is never disabled during animation.
19. No character becomes permanently displaced.
20. The application works without a backend.
21. The application builds successfully with Vite.
22. The application is ready for static hosting.

---

## 12. Final Instructions

Prioritize the actual user experience.

This is a tiny application, but its artwork and animation deserve attention.

Do not turn it into a complicated engineering project.

Do not spend unnecessary time creating abstractions, reusable systems, or elaborate architecture for a single-screen mini-game.

Make sensible decisions independently.

If an asset extraction technique fails, choose a practical alternative instead of getting stuck.

Do not stop after producing a static mockup.

The final deliverable must be a complete, functional, visually polished interactive application that Maria can open through a shared URL and immediately start slapping her boyfriend.

**The goal: Simple application. Excellent execution. Maximum comedic effect.**
