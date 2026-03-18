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

  storedApps.push(id);
  const data = JSON.stringify(storedApps);
  localStorage.setItem("installList", data);
};
export { addToStoreDB, getStoredApps };
