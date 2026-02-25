# DESN 378: Code + Design 2

🔗 **[Learning Log](https://kailebsworld.github.io/DESN378-code-design-2/)


🔗 **[DESN368 Portfolio](https://kailebsworld.github.io)

---

## About This Repository

This is my workspace for **DESN 378 Code + Design 2** also known as **Web Design 2** (or in the future, **Web Design + Code 2**) at Eastern Washington University. **The question this course asks:** How should things behave? In DESN 368, I learned how to make things look right. Here, I'm learning how to make things behave right — treating code as a design material with properties, behaviors, and constraints, just like paint, paper, or clay. Throughout the quarter, I'll work with four digital materials: CSS systems, SVG, animation libraries, and generative code — learning how each responds to manipulation and what each makes possible. Unlike courses focused on user research or backend engineering, this one asks: How does it feel? By the end, this repo will become my portfolio.


---

## Projects

| # | Project | Focus | Status |
|---|---------|-------|--------|
| 1 | The System | Design tokens + theme switching | 🔲 |

---

## Learning Log

# Learning Log

​
### What I Learned
<!-- What concepts clicked for you? What was new? -->
​
​
### What Was Hard
<!-- What frustrated you? What didn't make sense? -->
​
​
### How I Used AI
<!-- Did you use Copilot, ChatGPT, etc.? How did it help or not help? -->
​
​
### What's Still Unclear
<!-- What questions do you still have? What needs more practice? -->
​
​
### Work Completed (Week 0)
​
## Week 0
​
### What I Learned
I learned a lot about the language of Java Script espescially the do's and dont's. I Learned that there are certain characters that are not allowed and certain ones are for example no using capital letters in the beginning but are allowed in the second word. (log scorePoints;)​
### What Was Hard
I found the personalized message section hard on the Behavioral layer assignment.
​
### How I Used AI
I had to use copilot to help me with my coding for Java Script for the personalized message section of the Behaviroal layer.
​
### What's Still Unclear
I'm starting to understand Java Script but I feel like I need to see a lot of it in actual use to fully grasp whatit does and am def going to have to refer back to my notes still 
​
### Work Completed (Week 0)
​
**Engage**
- [x] Portfolio Audit
​
**Learn**
- [x] Console Explorer
- [x] Codedex Console Fundamentals
​
**Reflect**
- [x] Visual Notes: Variables and Strings
​
**Build**
- [x] The Setup
- [x] The Behavioral Layer​
---

Instructions

    Open your portfolio repo in VS Code

    Open README.md (create it if it doesn't exist)

    Add the Week 1 section using the template above

    Fill in your reflections (be honest — this is for you)

    Check off the work you completed from Week 0

    Commit and push

Why README.md?

Your README is:

    The first thing people see on your GitHub repo

    A place for documentation, not display

    Markdown-based (good practice)

    Separate from your portfolio website content

Think of it as your course journal that lives alongside your code.
Complete Criteria

    README.md exists in your portfolio repo
    Week 1 section added with all four reflection questions
    Week 0 work checklist included
    Committed and pushed to GitHub

Example Entry

Connection to Portfolio

Your README shows:

    You can write documentation

    You reflect on your learning process

    You track your own progress

    You understand version control workflow

Employers and instructors look at READMEs. A thoughtful learning log demonstrates self-awareness and growth mindset.
Enter Web URL
Website url input
# Learning Log
​
## Week #6/7
​
### What I Learned
This week was basically “motion finally makes sense.” GSAP taught me that animation isn’t just random movement — it’s like building behavior with rules. The big things that clicked were the three tween types (`to`, `from`, `fromTo`) and how they each have a different purpose. `to()` feels like “take this thing somewhere,” `from()` feels like “entrance moment,” and `fromTo()` is the most controlled when I don’t want anything flashing or glitching on load.

I also learned that the *special properties* are what make motion feel designed: `duration`, `delay`, `repeat`, `yoyo`, `ease`, and `stagger`. Ease is honestly the personality — if it’s the wrong ease it looks like a robot, and if it’s the right ease it suddenly feels intentional. Stagger was another big one because it makes multiple elements feel like a sequence instead of everything screaming at the same time.

The SVG part clicked too. SVGs don’t move with top/left like normal elements, so using GSAP’s `x` and `y` transforms is the correct way. I got way better at targeting parts of an SVG (like paths inside a group) and thinking about SVG attributes like `stroke` and `fill` instead of regular CSS stuff. Using Lucide icons made it easier because the SVG structure is clean and consistent, and it actually felt like “design + code” instead of fighting messy SVG markup.

### What Was Hard
A lot of my problems were the annoying “it should work but it doesn’t” type. The biggest one was when animations didn’t play because GSAP wasn’t actually loaded the way I thought it was (CodePen settings vs pasting scripts). Another hard thing was targeting the right SVG elements — like thinking I’m animating the icon but I’m really targeting the wrapper, or the `<path>` is nested and my selector is too broad/too specific.

Also `from()` tweens can be rude. Sometimes it flashes the end state before animating and it makes you feel insane. That’s where `fromTo()` felt safer because it’s explicit and doesn’t do surprise behavior. Transform origin was another one — motion technically works without it, but it looks wrong without it, especially when you’re rotating or scaling icons and you want it to feel centered and clean.

Stagger also wasn’t working at first because I forgot the obvious: you need multiple elements. If there’s only one thing with the class, stagger has nothing to stagger, so it just sits there like… okay.

### How I Used AI
I used ChatGPT/Copilot mostly like a troubleshooting partner and a translator for what I wanted. I asked it stuff like “why isn’t this selector hitting my SVG paths,” “why is my from tween flashing,” and “how do I structure this so I can play/reverse/restart without rewriting everything.” It helped me clean up my code, comment it properly, and keep everything organized in one CodePen instead of turning it into a chaotic mess. I also used it to compare eases and pick ones that matched the vibe instead of just defaulting to whatever.

### What's Still Unclear
I understand the concepts, but I still want more reps so I can do it faster without trial and error. I’m still figuring out when it’s smarter to use a timeline vs separate tweens, because timelines feel powerful but also easier to mess up if my sequencing is off. I also want to get better at making motion feel consistent across multiple icons so it looks like one system instead of five separate experiments.

Also I haven’t fully explored the plugins (like DrawSVGPlugin, MorphSVGPlugin, MotionPath) yet — I get what they’re for, but I haven’t used them enough to feel confident.

---

## Week #4

### What I Learned
I learned how SVGs are built from basic shapes and a viewBox, then how transforms move/rotate elements without redrawing everything. It honestly made SVG feel way less scary because it’s not just “random vector magic” — it’s literally shapes on a coordinate system. The viewBox part was the biggest “ohhhh” moment because once you get that, scaling stops being chaos and starts being predictable.

### What Was Hard
Creating an SVG without using paths was the hardest part, because you have to think in primitives (rect/circle/polygon) and layer/position them cleanly instead of just “draw the shape and move on.” It’s like forcing yourself to build something with Lego bricks instead of just drawing it freehand. I kept wanting to cheat and use a path because it’s faster, but the assignment made me actually understand how SVG structure works. So I ended up just making it pixelated haha.

### How I Used AI
I did to help me with the theme dropdown menu! I mainly used it to troubleshoot why my dropdown wasn’t behaving right and to remind me what to check when things weren’t clicking (like event listeners and making sure the menu actually closes when it should). It helped speed up the annoying little bugs.

### What's Still Unclear
I’m still not totally sure when it’s smarter to avoid paths vs just accept that paths are the correct tool for anything remotely complex. Like I get why paths exist (because obviously), but I’m still figuring out the line between “this is a simple shape build” and “stop suffering and use a path.” I’ll dig deeper....

---

## Week 3

### What I Learned
I learned why we use them! It truly makes life easier when working with Java! The more we built the theme system, the more it made sense that tokens + states aren’t just “extra steps,” they’re literally what keeps the project from turning into a messy, un-editable nightmare. It’s like once you set it up right, you can change things without everything falling apart.

### What Was Hard
I was very confused on the toggle at first and did have to ask chat to help me! The logic part was what tripped me up — like what’s happening vs what I *think* is happening. Once I actually understood the flow (and where the value is stored), it started feeling way more straightforward, but at the beginning I was definitely staring at it like… why are you not working.

### How I Used AI
Yes! I used it when I got stuck on the toggle logic and to confirm I wasn’t doing something dumb. It helped me figure out what I was missing and how to structure it so it felt cleaner instead of patchy.

### What's Still Unclear
None! I feel like this week finally made things click. I’m sure I’ll run into new stuff later, but for this part I’m good.

### Work Completed (Week 3)

**Design Tokens**
- [x] variables.css exists
- [x] Color tokens defined
- [x] Typography tokens defined
- [x] Spacing tokens defined
- [x] Tokens used in CSS (no hardcoded values)

**Theme System**
- [x] Uses data-theme on <html>
- [x] Toggle feedback is immediate

**Persistence & Preference**
- [x] Theme saved to localStorage
- [x] Theme persists on refresh
- [x] System preference used on first visit

**Deployment**
- [x] Deployed to GitHub Pages
- [x] Repository is public

## Quick Links
- [My Profile](PROFILE.md)
- [Labs](labs/)

---

### Week 2: Remembering Choices

### What I Learned
I'm understanding design tokens better and why they're nice to integrate into your figma file! Before this I thought styles were “fine” but variables are honestly way faster because you can flip modes and see the whole system change instantly. I think the part that help me clicked that together was in the figma variables assignment and we switched the modes from dark to light! It made it feel like I’m building an actual system instead of just decorating pages. Makes things way faster to play around with than just styles!

### What Was Hard
I didn't realize that the "layers" for applying modes, look for the Appearance panel instead so that was frustrating for about 20 minutes but with my good pal chat and my fellow classmtes group chat we got there! It was one of those things where the answer is simple but you can’t find the right panel so you spiral a little. Once I found it though, it was like… okay why did this take me so long.

### How I Used AI
Just to help me figure out the appearance panel like stated above! I basically asked what to click and where because I knew what I wanted to do, but Figma was hiding it from me. It helped me get unstuck fast instead of wasting the whole session.

### What's Still Unclear
Still need more practice with java but the puzzle pieces have started connecting! I’m not fully confident yet, but I’m definitely less lost than week 0. Excited to see what else we do with it!!​

### Work Completed (Week 2)

**Engage**
- [x] VS Code Theme Setup

**Learn**
- [x] Codedex.io Conditionals
- [x] figma variables

**Practice**
- [x] The Switch

**Build**
- [x] The Foundation
- [x] Portfolio in Figma + Style Tile

**Reflect**
- [x] Visual Notes: Week 2---​

---

### Week 1: Systems That Respond

## Week 1

### What I Learned
The story teller assignment taught me about else{ which can change the photos through out my story! That was my first time really seeing how code can create a “choose your own adventure” vibe instead of just showing the same thing every time. It made me realize JavaScript isn’t just math and rules — it’s literally how you make a website react and switch up based on what the user does.

### What Was Hard
Learn 1-3 // html academy chtp. 2 Introduction to Javascript chapters 10 - 17 was a little frustrating and def had to use chat when I got stuck but I got through it! The hardest part was when I understood the concept but couldn’t remember the exact syntax, so I kept getting tiny errors that stopped everything. Once I slowed down and actually read what the error was saying, it got easier, but yeah it was annoying.

### How I Used AI
Yes! Used it to help me make my story teller assignment cooler (heartbeat dots, and typewriter effect) + html academy. I used it like a creative assistant + a fixer when my code wasn’t behaving. It helped me level it up beyond the basic requirements and also saved me when I hit those “why is nothing working” moments.

### What's Still Unclear
Excited to learn more!! I still feel like I need more reps to make the JavaScript rules feel natural, but I’m not scared of it anymore.

### Work Completed (Week 1)

**Engage**
- [x] VS Code Theme Setup

**Learn**
- [x] Codedex.io Variables
- [x] HTML Academy

**Practice**
- [x] The Story Teller

**Build**
- [ ] Portfolio Migration
- [x] Portfolio in Figma + Style Tile

**Reflect**
- [x] Visual Notes: Week 1---​

---
# Learning Log
​



```html
<!-- System -->
<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3.5" y="5" width="17" height="11.5" rx="2"></rect>
  <line x1="9" y1="19" x2="15" y2="19"></line>
  <line x1="12" y1="16.5" x2="12" y2="19"></line>
</svg>
```

```html
<!-- Light -->
<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4.25"></circle>
  <line x1="12" y1="2.5" x2="12" y2="5"></line>
  <line x1="12" y1="19" x2="12" y2="21.5"></line>
  <line x1="2.5" y1="12" x2="5" y2="12"></line>
  <line x1="19" y1="12" x2="21.5" y2="12"></line>
  <line x1="5.3" y1="5.3" x2="7.1" y2="7.1"></line>
  <line x1="16.9" y1="16.9" x2="18.7" y2="18.7"></line>
  <line x1="5.3" y1="18.7" x2="7.1" y2="16.9"></line>
  <line x1="16.9" y1="7.1" x2="18.7" y2="5.3"></line>
</svg>
```

```html
<!-- Dark -->
<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="10.75" cy="12" r="6.25" fill="currentColor" stroke="none"></circle>
  <circle cx="14.25" cy="12" r="6.25" fill="var(--color-surface-primary)" stroke="none"></circle>
</svg>
```

**Anatomy check**
- `viewBox="0 0 24 24"` defines the internal coordinate system for the icon, so shapes align and scale consistently at any rendered size.
- `currentColor` makes SVG color inherit from the element text color, so one icon works across light/dark themes without rewriting fills/strokes.
- This icon set uses primitives only (`circle`, `rect`, `line`) and does not use `path`.

**Reflection**
- Icon design: The System icon uses a monitor shape to communicate "follow device/OS behavior" instead of forcing a fixed light or dark state.
- System logic: `localStorage` stores the user choice (`system`, `light`, or `dark`), then JS resolves the applied page theme. For `system`, applied theme follows `prefers-color-scheme`.
- Unexpected learning: Click-driven dropdowns need explicit open/close state management (outside click + Escape) to feel stable on both desktop and mobile.

## Tools

- **Editor:** VS Code + GitHub Copilot
- **Design:** Figma
- **Hosting:** GitHub Pages
- **Animation:** GSAP (coming Week 5)

---

*This README will evolve. At quarter's end, it transforms into a portfolio landing page.*
