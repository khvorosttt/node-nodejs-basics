const parseEnv = () => {
  const envArgs = [];
  Object.entries(process.env).forEach(([key, value]) => {
    if(key.startsWith('RSS_')) envArgs.push(`${key}=${value}`);
  });
  console.log(envArgs.join(' '));
};

parseEnv();
