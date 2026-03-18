const getStoredApps = () => {
  const storedAppsData = localStorage.getItem("installList");
  if (storedAppsData) {
    const storedApps = JSON.parse(storedAppsData);
    return storedApps;
  } else {
    return [];
  }
};
const addToStoreDB = (id) => {
  const storedApps = getStoredApps();
  if (!storedApps.includes(id)) {
    storedApps.push(id);
    const data = JSON.stringify(storedApps);
    localStorage.setItem("installList", data);
  }
};
const removeFromDB = (id) => {
  const storedApps = getStoredApps();
  const updated = storedApps.filter((appId) => appId !== id);
  const data = JSON.stringify(updated);
  localStorage.setItem("installList", data);
};
export { addToStoreDB, getStoredApps, removeFromDB };
