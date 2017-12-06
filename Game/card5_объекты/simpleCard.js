// BEGIN (write your solution here)
const make = (name, percent) =>
  (message) => {
    switch (message) {
      case 'getName':
        return name;
      case 'damage':
        return percent;
      default:
        return 'undefined method';
    }
  };

export default make;
// END

