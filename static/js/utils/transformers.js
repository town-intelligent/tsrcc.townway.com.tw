export const parse_sdgs_items = (plan_info) => {
  if (!plan_info || !plan_info.weight_description) {
    // 如果 plan_info 是 null、undefined 或者 weight_description 不存在，
    // 則返回一個空陣列或進行其他處理。
    return [];
  }
  
  const weights = JSON.parse(plan_info.weight_description);
  const sdgs_items = Object.entries(weights).map(([key, value]) => {
    const title = "SDG " + (parseInt(key) + 1);
    let index = parseInt(key) + 1;
    index = ("0" + index).slice(-2);

    return { title, index, value };
  });

  return sdgs_items;
};
