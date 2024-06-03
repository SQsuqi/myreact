// src/hooks/useDarkMode.jsx
const useDarkMode = () => {
  // 获取存储的暗模式设置，如果不存在，则使用系统的暗模式偏好
  const getInitialMode = () => {
    const savedMode = localStorage.getItem('use-color-scheme');
    if (savedMode) {
      return savedMode === 'dark';
    }
    const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isSystemDark;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('use-color-scheme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('use-color-scheme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return [toggleDarkMode];
};

export default useDarkMode;
