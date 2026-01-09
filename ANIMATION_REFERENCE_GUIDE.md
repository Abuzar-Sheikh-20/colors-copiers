# Animation & Styling Quick Reference Guide

## Tailwind Animation Classes Used

### Scale (Size) Animations
```tailwind
hover:scale-105      /* Grows to 105% of original size */
hover:scale-110      /* Grows to 110% of original size */
hover:scale-125      /* Grows to 125% of original size */
```

### Transform (Position) Animations
```tailwind
hover:-translate-y-1  /* Moves up 4px (lift effect) */
hover:-translate-y-2  /* Moves up 8px (more lift) */
hover:translate-x-1   /* Moves right 4px (slide) */
hover:translate-x-2   /* Moves right 8px (more slide) */
```

### Rotation Animations
```tailwind
hover:rotate-12      /* Rotates 12 degrees clockwise */
hover:-rotate-12     /* Rotates 12 degrees counter-clockwise */
```

### Shadow Effects
```tailwind
shadow-lg            /* Default shadow, medium */
shadow-xl            /* Larger shadow for elevation */
hover:shadow-lg      /* Medium shadow on hover */
hover:shadow-xl      /* Large shadow on hover */
```

### Transition Timing
```tailwind
transition-all       /* Animate all properties */
transition-shadow    /* Only animate shadow changes */
transition-colors    /* Only animate color changes */
transition-transform /* Only animate transform changes */
```

### Duration (Speed Control)
```tailwind
duration-200         /* 200 milliseconds (fast) */
duration-300         /* 300 milliseconds (standard) */
duration-500         /* 500 milliseconds (slow) */
```

---

## Common Animation Patterns Used

### Button Hover Pattern
```jsx
<Button className="transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
  Click Me
</Button>
```

### Card Lift Pattern
```jsx
<div className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
  Content
</div>
```

### Navigation Link Pattern
```jsx
<Link className="transition-all duration-300 hover:text-blue-600 hover:translate-x-1">
  Link Text
</Link>
```

### Icon Rotation Pattern
```jsx
<Icon className="transition-transform duration-300 hover:rotate-12" />
```

### Smooth Underline Pattern
```jsx
<a className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300">
  Link with Underline
</a>
```

---

## Color Transition Pattern
```jsx
<div className="text-gray-700 transition-all duration-300 hover:text-blue-600">
  Hover me
</div>
```

---

## Staggered Animation (Multiple Elements)
```jsx
{items.map((item, index) => (
  <div key={index} className="transition-all duration-300 hover:-translate-y-1">
    {item}
  </div>
))}
```

---

## Complete Button Example with All Effects
```jsx
<Link to="/contact">
  <Button 
    className="
      bg-gradient-to-r from-blue-600 to-purple-600
      transition-all duration-300
      transform hover:scale-105
      shadow-lg hover:shadow-xl
      cursor-pointer
    "
  >
    <Icon className="w-4 h-4 mr-2" />
    Click Me
  </Button>
</Link>
```

---

## Mobile-Friendly Animations
```jsx
{/* Desktop nav with underline animation */}
<div className="hidden md:flex">
  <Link 
    className="
      transition-all duration-300 hover:text-blue-600
      relative
      after:content-['']
      after:absolute
      after:bottom-0
      after:left-0
      after:w-0
      hover:after:w-full
      after:h-0.5
      after:bg-blue-600
      after:transition-all
      after:duration-300
    "
  >
    Link
  </Link>
</div>

{/* Mobile menu with fade animation */}
{isOpen && (
  <div className="md:hidden animate-in fade-in slide-in-from-top duration-300">
    Content
  </div>
)}
```

---

## Performance Tips

1. **Use `transition-all` sparingly** - Prefer specific transitions when possible
2. **Stick to transform and opacity** - These are GPU-accelerated
3. **Avoid animating width/height** - Use transform instead
4. **Use `duration-300`** - Good balance between responsiveness and smoothness
5. **Test on mobile devices** - Ensure animations don't cause lag

---

## Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## Accessibility Notes
- All animations have `transition` properties defined
- Users can disable animations via OS preferences (media query)
- Animations don't interfere with functionality
- Keyboard navigation not affected
- Touch targets remain appropriately sized

---

## CSS Generated Example
```css
/* For reference: The compiled CSS for animations */

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-300 {
  transition-duration: 300ms;
}
```

---

**Last Updated:** January 9, 2026
**Tailwind CSS Version:** Compatible with v3+
