export const parseVerses = (verses) => {
  return verses.split(/\[\d\]/).reduce((arr, v) => {
    v = v.trim();
    if(v) arr.push(v);
    return arr;
  }, [])
};
