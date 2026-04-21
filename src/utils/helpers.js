export const filterData = (dataList, categoryKeywords = [], query) => {
  if (!query) return dataList;
  if (categoryKeywords.some(keyword => query.toLowerCase().includes(keyword.toLowerCase()))) return dataList;
  return dataList.filter(item => 
    item.title.toLowerCase().includes(query) ||
    (item.role && item.role.toLowerCase().includes(query)) ||
    (item.type && item.type.toLowerCase().includes(query))
  );
};