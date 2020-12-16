# Time Dashboard

Time dashboard for important times. Colour theme based on time of day.

## Built with

- Nextjs
- React
- TypeScript
- Geo IP API
- World Time API

### Favourite function I wrote for this

Find out if a year is a gap year.

```javascript
export const isLeapYear = (date: number) => {
  if (date % 4 !== 0) {
    return false;
  } else if (date % 100 !== 0) {
    return true;
  } else if (date % 400 !== 0) {
    return false;
  } else return true;
};
```

<img src='/public/s1.png' alt='Screen shot day' />
<img src='/public/s2.png' alt='Screen shot day' />
