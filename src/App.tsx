import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function App() {
  const [markdown, setMarkdown] = useState(`# 本周工作总结

## 完成的工作
- [x] 完成用户认证模块开发
- [x] 优化数据库查询性能
- [x] 修复了5个关键bug

## 下周计划
- [ ] 开始支付功能开发
- [ ] 代码审查和重构
- [ ] 团队技术分享

## 遇到的问题
1. 数据库连接池配置需要优化
2. 前端性能监控需要完善

## 学习收获
- 深入学习了React并发特性
- 掌握了新的测试工具`)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 左侧编辑器 */}
      <div className="w-1/2 p-6 border-r border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">编辑器</h2>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="w-full h-[calc(100vh-8rem)] p-4 font-mono text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="在此输入Markdown格式的周报内容..."
        />
      </div>

      {/* 右侧预览 */}
      <div className="w-1/2 p-6 bg-white">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">预览</h2>
        <div className="prose prose-sm max-w-none h-[calc(100vh-8rem)] overflow-auto p-4 bg-gray-50 rounded-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default App
