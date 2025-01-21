import axios from 'axios';

// 创建 axios 实例，修改默认 baseURL
const instance = axios.create({
  baseURL: localStorage.getItem('apiBaseUrl') || process.env.REACT_APP_API_BASE_URL || 'https://protx.cn/',
  timeout: 5000, // 5 秒超时
  headers: {
    'Content-Type': 'application/json',
  },
  // 添加这些配置确保请求能被浏览器捕获和显示
  withCredentials: true, // 允许跨域请求携带 cookies
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 添加请求日志
    console.log('Request:', {
      url: config.url,
      method: config.method,
      data: config.data,
      headers: config.headers
    });

    // 从 localStorage 获取 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 添加响应日志
    console.log('Response:', {
      status: response.status,
      data: response.data,
      headers: response.headers
    });

    return response;
  },
  (error) => {
    console.error('Response Error:', error);
    const { response } = error;
    
    if (response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    } else if (response) {
      switch (response.status) {
        case 403:
          console.error('没有权限访问该资源');
          break;
        case 404:
          console.error('请求的资源不存在');
          break;
        case 500:
          console.error('服务器错误');
          break;
        default:
          console.error('发生错误:', response.data?.message || '未知错误');
      }
    } else if (error.request) {
      // 请求已发出但没有收到响应
      console.error('网络错误，无法连接到服务器');
    } else {
      // 请求配置出错
      console.error('请求配置错误:', error.message);
    }

    return Promise.reject(error);
  }
);

// 添加请求测试方法
export const testConnection = async () => {
  try {
    const response = await instance.get('/health-check');
    return response.status === 200;
  } catch (error) {
    console.error('API connection test failed:', error);
    return false;
  }
};

export default instance; 