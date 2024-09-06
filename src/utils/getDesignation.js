export function getDesignation(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i]?.author?.toLowerCase().split(' ')[0] === 'anam') {
      data[i].role = 'Content Manager';
    } else {
      data[i].role = 'Content Writer';
    }
  }
  return data;
}
