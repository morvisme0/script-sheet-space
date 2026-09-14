# PDF Canvas (48)

Design a complete, production-quality mobile-first PDF utility and document app UI.

The app is a modern alternative to apps such as iLovePDF. Take inspiration from the range of functionality those apps provide, but do NOT copy their visual design, branding, layout, colors, or component styles. The visual identity must feel original.

1. Product concept

Create a mobile app that lets users:

PDF management

Import PDFs from the phone

Browse recent PDF files

Open and read PDFs

Search inside PDFs

Navigate between pages

View page thumbnails

Zoom in/out

Bookmark pages

Share and export documents

PDF editing

Design an intuitive PDF editor that allows users to:

Edit existing PDF text where possible

Add new text

Add text boxes

Highlight text

Underline text

Strike through text

Draw/freehand

Add shapes

Add images

Add signatures

Add checkmarks

Add comments/notes

Undo/redo changes

PDF page management

Users should be able to:

Reorder pages

Rotate pages

Delete pages

Duplicate pages

Extract selected pages

Insert pages

Merge multiple PDFs

Split PDFs

PDF conversion

Include tools for:

Images → PDF

PDF → Images

PDF → Word

Word → PDF

PDF optimization

Include:

Compress PDF

Reduce file size

Optimize document

The UI should make these tools feel like one coherent application rather than a collection of unrelated utilities.

2. Target platform

Design specifically for smartphones.

The UI should work naturally on:

Android phones

iPhones

Use a mobile-first layout.

Prioritize:

One-handed interaction

Comfortable touch targets

Bottom navigation

Bottom sheets

Swipe gestures

Floating actions where appropriate

Thumb-friendly controls

Clear hierarchy

Minimal unnecessary navigation

Do NOT design a desktop dashboard and simply shrink it down to mobile.

3. Visual identity

Create an original modern visual language.

The app should feel:

Premium

Clean

Modern

Fast

Trustworthy

Professional

Simple enough for casual users

Powerful enough for advanced PDF users

Avoid making it look like a generic office/document application.

Important:

Do NOT copy iLovePDF's:

Color palette

Logo

Cards

Layout

Navigation

Typography

Illustrations

Branding

Component styling

Use iLovePDF only as inspiration for what functionality a PDF utility app can contain.

The final design should look like an entirely different product.

4. Light and dark mode

Design BOTH:

Light mode

Bright but not pure-white everywhere

Soft neutral backgrounds

Strong document contrast

Subtle borders

Clean surfaces

Comfortable reading experience

Dark mode

True modern dark UI

Avoid excessive pure black

Use layered dark surfaces

Strong but comfortable text contrast

PDF/document content remains visually clear

Avoid excessive glowing effects

Both themes must feel like the same product.

Do not simply invert the colors.

Define consistent:

Background colors

Surface colors

Primary color

Secondary color

Text hierarchy

Borders

Dividers

Selected states

Disabled states

Error states

Success states

5. Main navigation

Create a simple mobile navigation system.

Recommended structure:

Home

The main dashboard.

Show:

Greeting / app header

Search

Recent documents

Quick actions

PDF tools

Create/import button

Files

A document/file browser.

Show:

Recent

PDFs

Images

Documents

Folders

Sorting

Search

Grid/list toggle

Create

A central action area for:

Import PDF

Scan document

Images → PDF

Create blank document

Merge PDFs

Tools

A complete PDF toolbox.

Organize tools into logical categories:

Convert

PDF → Word

Word → PDF

PDF → Images

Images → PDF

Organize

Merge

Split

Reorder

Rotate

Delete pages

Extract pages

Edit

Edit PDF

Annotate

Sign

Fill forms

Optimize

Compress

Optimize

Settings

Include:

Appearance

Light / Dark / System

Default PDF viewer settings

Storage

Notifications

Language

Privacy

About

6. Home screen

Create a polished home screen.

The first screen should immediately communicate:

"This is a powerful PDF app, but it is easy to use."

Suggested hierarchy:

Header

Search

Continue reading / recent document

Primary quick actions

Popular tools

All tools

Recent files

Do not overload the screen.

Use visual grouping and hierarchy instead of showing dozens of equally important buttons.

7. PDF reader

Design a complete PDF reading experience.

The reader should have a distraction-free mode.

Include:

PDF page canvas

Page number indicator

Current page / total pages

Zoom controls

Search

Bookmark

Share

More menu

Support:

Pinch-to-zoom

Vertical page scrolling

Page thumbnails

Jump to page

Search results

Bookmarks

When controls are hidden, the document should occupy almost the entire screen.

Design a bottom toolbar that appears naturally when the user interacts with the document.

8. PDF editor

Create a powerful but approachable mobile PDF editing interface.

When editing a document:

Top bar

Include:

Back

Document name

Undo

Redo

Save/export

Editing toolbar

Include tools such as:

Select

Text

Highlight

Underline

Strike

Draw

Pen

Eraser

Shapes

Image

Signature

Comment

Use a horizontal tool tray or expandable bottom toolbar.

The editor must feel usable on a phone.

Do not create tiny desktop-style controls.

9. Text editing

Create UI for editing existing PDF text.

When the user selects text:

Show contextual editing controls

Font controls

Font size

Bold

Italic

Alignment

Text color

Highlight

Copy

Delete

Also support adding new text boxes.

Make the interaction visually understandable even without implementation.

10. Page organizer

Design a page management screen.

Display PDF pages as thumbnails in a grid.

Each page should show:

Page number

Thumbnail

Selection state

Actions:

Drag to reorder

Rotate

Delete

Duplicate

Extract

Select multiple

Provide a bottom action bar when pages are selected.

Example:

"3 pages selected"

Then:

Extract

Delete

Rotate

Merge

Share

11. Merge PDFs

Create a simple merge workflow:

Select PDFs

Show selected files

Drag to reorder

Preview

Merge

Show result

Make the workflow visually simple.

12. Split PDF

Create a split workflow.

Allow:

Split by page ranges

Extract selected pages

Split every N pages

Show a page preview before confirming.

13. Conversion screens

Create consistent conversion screens.

Example:

PDF → Word

Show:

PDF file
↓
Conversion settings
↓
Convert
↓
Progress
↓
Completed
↓
Open / Share / Save

Use the same visual language for every conversion.

Do not make each tool look like a different application.

14. Compression

Design a compression screen.

Show:

Original size
→
Compression level
→
Estimated output size

Options:

Low compression / high quality

Balanced

Maximum compression / smaller size

Then:

Compress PDF

After completion:

New file size

Percentage saved

Open

Share

Save

15. Import experience

Design a polished file-import experience.

The user should be able to choose:

Files

Photos

Camera / scan

Recent documents

Use a bottom sheet rather than an overwhelming full-screen menu where appropriate.

16. Scan document

Include a modern document scanning UI.

Show:

Camera preview

Document boundary detection visualization

Capture button

Flash

Gallery

Auto/manual capture

After scanning:

Crop

Rotate

Enhance

Add page

Reorder

Save as PDF

17. File browser

Create a mobile file manager.

Include:

Search

Sort

Filter

Grid/list toggle

File type

File size

Modified date

Each PDF item should display:

Thumbnail

File name

Page count

File size

Modified date

More menu

Use realistic example PDF names.

18. Recent documents

Show realistic recent-document cards/list items.

Examples:

University Notes.pdf

Invoice September.pdf

Project Proposal.pdf

Chapter 12.pdf

Contract.pdf

Do not use meaningless placeholder names everywhere.

19. Empty states

Design useful empty states for:

No documents

No recent files

No search results

No bookmarks

No folders

Each empty state should explain what the user can do next.

20. Loading / progress states

Design:

File importing

PDF processing

Conversion

Compression

Saving

Exporting

Use elegant progress indicators.

Show meaningful status messages such as:

"Preparing your PDF…"

"Optimizing document…"

"Almost done…"

Avoid overly technical messages.

21. Success states

After an operation completes, show a polished success state.

Example:

✓ PDF compressed successfully

Original:
12.4 MB

New:
4.8 MB

Saved:
61%

Actions:

Open PDF
Share
Done

22. Error states

Design friendly error states.

Examples:

Unsupported file

Corrupted PDF

Conversion failed

Not enough storage

Operation cancelled

Explain the problem clearly and provide an obvious recovery action.

23. Bottom sheets and dialogs

Use bottom sheets extensively where appropriate.

Examples:

File actions

Share options

Rename

Delete confirmation

Page actions

Editing options

Compression settings

Sort/filter

Make them feel native to mobile.

24. Design system

Create a consistent design system.

Define:

Typography

Use a modern, highly readable sans-serif.

Clear hierarchy:

Display

Large title

Title

Body

Caption

Metadata

Spacing

Use a consistent spacing scale.

Radius

Use moderately rounded corners.

Avoid excessive "bubble UI."

Icons

Use a consistent modern icon family.

Do not mix icon styles.

Components

Design reusable:

Buttons

Icon buttons

Cards

File rows

Tool cards

Bottom navigation

Bottom sheets

Tabs

Search bars

Chips

Toggles

Sliders

Progress indicators

Dialogs

Snackbars

Toolbars

25. Interaction principles

The UI should communicate hierarchy clearly.

Primary actions should be obvious.

Avoid:

Too many floating buttons

Excessive gradients

Excessive shadows

Excessive animations

Tiny controls

Dense desktop-like interfaces

Unnecessary decorative elements

Use subtle animations for:

Page transitions

Bottom sheets

Tool selection

File operations

Progress

Success states

The application should feel fast and responsive.

26. Accessibility

Design for accessibility:

High contrast

Large enough touch targets

Readable typography

Clear selected states

Do not rely solely on color

Clear labels for important icons

Support dynamic text where possible

27. Screens to generate

Generate a complete UI covering at least these screens:

Splash / launch

Onboarding

Home

Home — dark mode

Home — light mode

Files

Search

File preview

PDF reader

PDF reader with thumbnails

PDF editor

Text editing

Annotation toolbar

Page organizer

Merge PDFs

Split PDF

PDF → Word

Word → PDF

PDF → Images

Images → PDF

Compress PDF

Scan document

Scan result/edit

File import

Processing/progress

Success/result

Error state

Settings

Appearance settings

Empty states

File actions bottom sheet

Page actions bottom sheet

28. Important UX requirement

The app should have a clear distinction between:

Reading

and

Editing

When opening a PDF, default to a clean reading experience.

The user can then enter Edit mode when needed.

This prevents the reader from feeling like a complicated editor.

29. Overall visual goal

Imagine a completely new product:

A beautiful, fast, mobile-first PDF workspace where a normal user can open a PDF and simply read it, while advanced users can manipulate, edit, convert, organize, compress, sign, and share documents.

It should feel closer to a modern premium mobile productivity application than a traditional office application.

Prioritize:

Clarity > decoration

Usability > visual complexity

Originality > copying competitors

Mobile UX > desktop conventions

Professional polish > generic templates

Generate realistic screens with realistic document data so the result looks like a finished product rather than a wireframe.

The final design should be cohesive across light and dark modes, with a strong original visual identity and a consistent component system. in nextjs or react

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/23758417-d31c-4df8-ad67-3b9e02f74072).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
