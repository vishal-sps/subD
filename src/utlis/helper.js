export const isDevEnv = process.env.NODE_ENV === "development" ? true : false;

export const getSubdomain = (location) => {
  const locationParts = location.split(".");

  let sliceTo = -2;
  //for localhost
  const isLocalHost = locationParts.slice(-1)[0] === "localhost";

  if (isLocalHost) sliceTo = -1;

  return locationParts.slice(0, sliceTo).join("");
  // remove last 1 or 2 element depend upon example.localhost (remove 1 item i.e., localhost) return example
  // or www.xz.com (remove 2 item i.e., xz and com) return www
};

const getSubdomainAsPerFuzzRender = (url) => {
  try {
    let arr = url?.split(".");
    if (arr.length == 4) {
      return arr[0];
    } else {
      return "";
    }
  } catch (error) {
    console.log("error", error);
    return "";
  }
};

export const subDomain = () => {
  if (typeof window !== undefined) {
    const subDomain = isDevEnv
      ? getSubdomain(window.location.hostname)
      : getSubdomainAsPerFuzzRender(window.location.hostname);
    return subDomain;
  } else {
    return "";
  }
};
