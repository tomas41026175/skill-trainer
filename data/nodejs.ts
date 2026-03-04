import { type Question } from "@/types";

export const nodejsQuestions: Question[] = [
  // ===== Beginner (10 題) =====
  {
    id: "nodejs-001",
    category: "nodejs",
    difficulty: "beginner",
    topic: "模組系統",
    type: "multiple-choice",
    question: "在 CommonJS 模組系統中，用哪個函式引入模組？",
    options: ["A. import", "B. require", "C. include", "D. load"],
    answer: "B",
    explanation:
      "CommonJS 使用 require() 函式引入模組，這是 Node.js 預設的模組系統。ES Module 才使用 import 語法。",
    tags: ["modules", "commonjs", "require"],
  },
  {
    id: "nodejs-002",
    category: "nodejs",
    difficulty: "beginner",
    topic: "模組系統",
    type: "true-false",
    question:
      "在 Node.js 的 CommonJS 模組中，module.exports 和 exports 永遠指向同一個物件，可以互換使用。",
    answer: "false",
    explanation:
      "exports 是 module.exports 的初始引用，但若直接對 module.exports 重新賦值（如 module.exports = function(){}），exports 就不再與之同步。因此不可無條件互換使用。",
    tags: ["modules", "commonjs", "exports"],
  },
  {
    id: "nodejs-003",
    category: "nodejs",
    difficulty: "beginner",
    topic: "npm 基礎",
    type: "multiple-choice",
    question: "執行哪個指令可以初始化一個新的 npm 專案並建立 package.json？",
    options: [
      "A. npm start",
      "B. npm install",
      "C. npm init",
      "D. npm create",
    ],
    answer: "C",
    explanation:
      "npm init 會引導使用者填入專案資訊並建立 package.json 檔案。加上 -y 參數（npm init -y）可以跳過問答直接使用預設值。",
    tags: ["npm", "package.json", "init"],
  },
  {
    id: "nodejs-004",
    category: "nodejs",
    difficulty: "beginner",
    topic: "npm 基礎",
    type: "fill-blank",
    question:
      "npm install --save-dev 安裝的套件會被記錄在 package.json 的哪個欄位？",
    answer: "devDependencies",
    explanation:
      "使用 --save-dev（或 -D）安裝的套件屬於開發依賴，記錄在 devDependencies。正式依賴則記錄在 dependencies 欄位。",
    tags: ["npm", "devDependencies", "package.json"],
  },
  {
    id: "nodejs-005",
    category: "nodejs",
    difficulty: "beginner",
    topic: "callback",
    type: "multiple-choice",
    question: "Node.js 中 callback 函式的第一個參數慣例上代表什麼？",
    options: [
      "A. 回傳的資料",
      "B. 錯誤物件（Error-first callback）",
      "C. HTTP 狀態碼",
      "D. 函式名稱",
    ],
    answer: "B",
    explanation:
      "Node.js 採用「Error-first callback」慣例，callback 第一個參數為 err，若操作成功則為 null，發生錯誤則為 Error 物件。後續參數才是實際資料。",
    tags: ["callback", "error-first", "convention"],
  },
  {
    id: "nodejs-006",
    category: "nodejs",
    difficulty: "beginner",
    topic: "fs 基礎",
    type: "multiple-choice",
    question: "fs.readFile 與 fs.readFileSync 最主要的差別是什麼？",
    options: [
      "A. readFile 只能讀取文字，readFileSync 可讀取二進位",
      "B. readFile 是非同步（不阻塞），readFileSync 是同步（阻塞）",
      "C. readFileSync 速度較快",
      "D. readFile 需要額外安裝套件",
    ],
    answer: "B",
    explanation:
      "fs.readFile 使用 callback 非同步讀取，不會阻塞事件迴圈；fs.readFileSync 則是同步讀取，會阻塞後續程式執行直到檔案讀取完成。",
    tags: ["fs", "readFile", "sync", "async"],
  },
  {
    id: "nodejs-007",
    category: "nodejs",
    difficulty: "beginner",
    topic: "HTTP server 基礎",
    type: "multiple-choice",
    question: "以下哪個程式碼可以建立一個最簡單的 Node.js HTTP server？",
    options: [
      "A. const server = http.create()",
      "B. const server = http.createServer((req, res) => {})",
      "C. const server = new http.Server()",
      "D. const server = http.listen(3000)",
    ],
    answer: "B",
    explanation:
      "http.createServer() 接受一個請求處理函式（request listener）並回傳 Server 物件，是建立 HTTP server 的標準方式。之後再呼叫 server.listen(port) 開始監聽。",
    tags: ["http", "createServer", "server"],
  },
  {
    id: "nodejs-008",
    category: "nodejs",
    difficulty: "beginner",
    topic: "事件迴圈",
    type: "true-false",
    question: "Node.js 是多執行緒的，可以同時執行多個 JavaScript 程式碼片段。",
    answer: "false",
    explanation:
      "Node.js 的 JavaScript 執行是單執行緒的，透過事件迴圈（Event Loop）處理非同步操作。雖然 libuv 底層使用執行緒池處理 I/O，但 JS 程式碼本身只在單一執行緒中執行。",
    tags: ["event-loop", "single-thread", "libuv"],
  },
  {
    id: "nodejs-009",
    category: "nodejs",
    difficulty: "beginner",
    topic: "事件迴圈",
    type: "multiple-choice",
    question:
      "以下哪個全域物件代表當前 Node.js 行程（process），可用來讀取環境變數？",
    options: ["A. window", "B. global", "C. process", "D. env"],
    answer: "C",
    explanation:
      "process 是 Node.js 的全域物件，process.env 可讀取環境變數，process.argv 可讀取命令列參數，process.exit() 可結束行程。",
    tags: ["process", "env", "global"],
  },
  {
    id: "nodejs-010",
    category: "nodejs",
    difficulty: "beginner",
    topic: "模組系統",
    type: "fill-blank",
    question:
      "ES Module 語法中，要匯出一個名為 add 的函式，應使用 `export _____ add`（填入關鍵字）。",
    answer: "function",
    explanation:
      "ES Module 使用 export 關鍵字匯出，可以直接在宣告前加 export，如 `export function add() {}`，或用 `export { add }` 批次匯出。",
    tags: ["esm", "export", "modules"],
  },

  // ===== Intermediate (10 題) =====
  {
    id: "nodejs-011",
    category: "nodejs",
    difficulty: "intermediate",
    topic: "Promise / async-await",
    type: "multiple-choice",
    question: "Promise 有哪三種狀態？",
    options: [
      "A. pending / resolved / error",
      "B. pending / fulfilled / rejected",
      "C. waiting / done / failed",
      "D. idle / success / failure",
    ],
    answer: "B",
    explanation:
      "Promise 的三種狀態為：pending（等待中）、fulfilled（已完成，成功）、rejected（已拒絕，失敗）。一旦從 pending 轉為 fulfilled 或 rejected 就不可再改變。",
    tags: ["promise", "async", "states"],
  },
  {
    id: "nodejs-012",
    category: "nodejs",
    difficulty: "intermediate",
    topic: "Promise / async-await",
    type: "multiple-choice",
    question: "Promise.all 與 Promise.allSettled 的主要差異是什麼？",
    options: [
      "A. Promise.all 速度較快",
      "B. Promise.all 中任一 Promise reject 即整體 reject；Promise.allSettled 等所有 Promise 結束才回傳結果",
      "C. Promise.allSettled 只處理成功情況",
      "D. 兩者完全相同",
    ],
    answer: "B",
    explanation:
      "Promise.all 在任一 Promise reject 時立即 reject（短路）；Promise.allSettled 會等所有 Promise 都結束（無論成功或失敗），再回傳每個結果的狀態陣列，適合需要知道所有結果的場景。",
    tags: ["promise", "Promise.all", "Promise.allSettled"],
  },
  {
    id: "nodejs-013",
    category: "nodejs",
    difficulty: "intermediate",
    topic: "Promise / async-await",
    type: "true-false",
    question:
      "async 函式一定回傳 Promise，即使函式內部直接 return 一個非 Promise 的值。",
    answer: "true",
    explanation:
      "async 函式永遠回傳 Promise。若 return 非 Promise 值（如數字或字串），會被自動包裝成 Promise.resolve(值)。這是 async/await 語法的核心特性。",
    tags: ["async", "await", "promise"],
  },
  {
    id: "nodejs-014",
    category: "nodejs",
    difficulty: "intermediate",
    topic: "Stream",
    type: "multiple-choice",
    question: "Node.js Stream 的主要優點是什麼？",
    options: [
      "A. 程式碼較簡潔",
      "B. 可以邊讀邊處理資料，不需要把整個檔案載入記憶體",
      "C. 比 fs.readFile 的 API 更簡單",
      "D. 只能用於網路傳輸",
    ],
    answer: "B",
    explanation:
      "Stream 可以分批處理資料（chunk by chunk），適合處理大型檔案或網路資料流，避免一次將全部資料載入記憶體造成 OOM（Out of Memory）問題。",
    tags: ["stream", "memory", "performance"],
  },
  {
    id: "nodejs-015",
    category: "nodejs",
    difficulty: "intermediate",
    topic: "Stream",
    type: "fill-blank",
    question: "將 Readable stream 的資料導向 Writable stream 的方法叫做 ___。",
    answer: "pipe",
    explanation:
      "pipe() 方法可以將 Readable stream 的輸出自動導向 Writable stream，例如 readStream.pipe(writeStream)，Node.js 會自動處理背壓（backpressure）。",
    tags: ["stream", "pipe", "readable", "writable"],
  },
  {
    id: "nodejs-016",
    category: "nodejs",
    difficulty: "intermediate",
    topic: "EventEmitter",
    type: "multiple-choice",
    question: "使用 EventEmitter 時，哪個方法用來觸發（發射）一個事件？",
    options: ["A. .trigger()", "B. .dispatch()", "C. .emit()", "D. .fire()"],
    answer: "C",
    explanation:
      "EventEmitter 使用 .emit(eventName, ...args) 觸發事件，監聽方使用 .on(eventName, listener) 或 .once(eventName, listener) 訂閱事件。",
    tags: ["eventemitter", "emit", "events"],
  },
  {
    id: "nodejs-017",
    category: "nodejs",
    difficulty: "intermediate",
    topic: "錯誤處理",
    type: "multiple-choice",
    question:
      "在 async/await 語法中，如何捕捉 await 表達式拋出的錯誤（Promise rejected）？",
    options: [
      "A. 使用 .catch() 鏈結",
      "B. 使用 try...catch 包住 await 表達式",
      "C. 使用 Promise.reject()",
      "D. await 不會拋出錯誤",
    ],
    answer: "B",
    explanation:
      "在 async 函式內，使用 try...catch 可以捕捉 await 後的 Promise rejected 錯誤，這與同步程式碼的錯誤處理方式相同，使程式碼更易讀。",
    tags: ["async", "await", "try-catch", "error-handling"],
  },
  {
    id: "nodejs-018",
    category: "nodejs",
    difficulty: "intermediate",
    topic: "Express 路由",
    type: "multiple-choice",
    question: "在 Express 中，middleware 函式的第三個參數 next 的作用是？",
    options: [
      "A. 取得下一個請求",
      "B. 將控制權傳遞給下一個 middleware 或路由處理器",
      "C. 結束回應",
      "D. 讀取下一行程式碼",
    ],
    answer: "B",
    explanation:
      "next() 呼叫後，Express 會繼續執行堆疊中下一個 middleware 或路由處理器。若不呼叫 next()，請求將停留在當前 middleware 而不繼續處理。",
    tags: ["express", "middleware", "next", "routing"],
  },
  {
    id: "nodejs-019",
    category: "nodejs",
    difficulty: "intermediate",
    topic: "Express 路由",
    type: "true-false",
    question:
      "Express 的 app.use() 可以用於掛載 middleware，但只能匹配完整的路徑（不支援路徑前綴匹配）。",
    answer: "false",
    explanation:
      "app.use('/api', router) 會匹配所有以 /api 開頭的請求路徑（前綴匹配），例如 /api/users、/api/posts 都會匹配。這與 app.get('/api') 只匹配完整路徑不同。",
    tags: ["express", "use", "middleware", "routing"],
  },
  {
    id: "nodejs-020",
    category: "nodejs",
    difficulty: "intermediate",
    topic: "EventEmitter",
    type: "fill-blank",
    question:
      "EventEmitter 中，若只想讓監聽器執行一次後自動移除，應使用 .___() 而非 .on()。",
    answer: "once",
    explanation:
      "once(eventName, listener) 與 on() 類似，但事件觸發後監聽器會自動移除，只執行一次，適合用於只需響應一次的事件（如連線建立）。",
    tags: ["eventemitter", "once", "listener"],
  },

  // ===== Advanced (10 題) =====
  {
    id: "nodejs-021",
    category: "nodejs",
    difficulty: "advanced",
    topic: "Worker Threads",
    type: "multiple-choice",
    question: "Node.js Worker Threads 主要用來解決什麼問題？",
    options: [
      "A. 替代 async/await 處理非同步 I/O",
      "B. 在多個執行緒中執行 CPU 密集型運算，避免阻塞主執行緒",
      "C. 增加 HTTP 連線數量",
      "D. 管理資料庫連線池",
    ],
    answer: "B",
    explanation:
      "Worker Threads 允許在背景執行緒執行 JavaScript，適合 CPU 密集型任務（如加密、影像處理、大量計算）。I/O 密集型任務則應使用原本的非同步 API，不需要 Worker Threads。",
    tags: ["worker-threads", "cpu", "parallelism"],
  },
  {
    id: "nodejs-022",
    category: "nodejs",
    difficulty: "advanced",
    topic: "Worker Threads",
    type: "multiple-choice",
    question: "Worker Threads 間如何共享記憶體？",
    options: [
      "A. 透過全域變數直接共享",
      "B. 使用 SharedArrayBuffer 搭配 Atomics",
      "C. 透過 process.env 傳遞",
      "D. Worker Threads 無法共享記憶體",
    ],
    answer: "B",
    explanation:
      "SharedArrayBuffer 允許多個 Worker 存取同一塊記憶體，搭配 Atomics 物件提供原子操作（atomic operations）以避免競態條件（race condition）。",
    tags: ["worker-threads", "SharedArrayBuffer", "Atomics"],
  },
  {
    id: "nodejs-023",
    category: "nodejs",
    difficulty: "advanced",
    topic: "Cluster",
    type: "multiple-choice",
    question: "Node.js cluster 模組的主要用途是什麼？",
    options: [
      "A. 管理多個資料庫連線",
      "B. 建立多個 Worker 行程以利用多核心 CPU",
      "C. 分散式快取管理",
      "D. 管理 Worker Threads 生命週期",
    ],
    answer: "B",
    explanation:
      "cluster 模組讓 Node.js 可以 fork 多個子行程（workers），每個子行程監聽同一個 port，由 master 行程分配連線，有效利用多核心 CPU 提升吞吐量。",
    tags: ["cluster", "multi-core", "fork", "master-worker"],
  },
  {
    id: "nodejs-024",
    category: "nodejs",
    difficulty: "advanced",
    topic: "Cluster",
    type: "true-false",
    question:
      "Node.js cluster 模組中，master 行程和 worker 行程共享同一個記憶體空間。",
    answer: "false",
    explanation:
      "cluster 使用 fork() 建立獨立的子行程，每個行程有自己獨立的記憶體空間（不同於 Worker Threads 可使用 SharedArrayBuffer）。行程間通訊需透過 IPC（Inter-Process Communication）。",
    tags: ["cluster", "fork", "process", "memory"],
  },
  {
    id: "nodejs-025",
    category: "nodejs",
    difficulty: "advanced",
    topic: "記憶體洩漏排查",
    type: "multiple-choice",
    question: "以下哪種情況最容易造成 Node.js 記憶體洩漏？",
    options: [
      "A. 使用 const 宣告變數",
      "B. 在全域物件上累積新增屬性而不清除，或忘記移除 EventEmitter 的監聽器",
      "C. 使用 async/await",
      "D. 讀取大型 JSON 檔案",
    ],
    answer: "B",
    explanation:
      "常見記憶體洩漏原因：1) 全域物件持續累積資料；2) EventEmitter 監聽器未移除（使用 removeListener 或 once）；3) 閉包長期持有大型物件引用；4) 快取無上限增長。",
    tags: ["memory-leak", "eventemitter", "closure", "debugging"],
  },
  {
    id: "nodejs-026",
    category: "nodejs",
    difficulty: "advanced",
    topic: "記憶體洩漏排查",
    type: "fill-blank",
    question:
      "Node.js 內建的 ___ 模組提供 heapSnapshot 等功能，可用於分析記憶體使用情況。",
    answer: "v8",
    explanation:
      "v8 模組（require('v8')）提供 v8.writeHeapSnapshot() 等方法，也可搭配 --inspect 旗標使用 Chrome DevTools 進行記憶體 heap snapshot 分析，找出記憶體洩漏根因。",
    tags: ["v8", "heap", "memory", "profiling"],
  },
  {
    id: "nodejs-027",
    category: "nodejs",
    difficulty: "advanced",
    topic: "效能調優",
    type: "multiple-choice",
    question: "Node.js 使用 --inspect 旗標啟動時，主要開啟了什麼功能？",
    options: [
      "A. 記錄所有 HTTP 請求",
      "B. 啟用 Chrome DevTools 的遠端偵錯（Remote Debugging）介面",
      "C. 自動重啟伺服器",
      "D. 顯示詳細的錯誤堆疊",
    ],
    answer: "B",
    explanation:
      "node --inspect app.js 會在 9229 port 開啟 DevTools 協定（DevTools Protocol），讓 Chrome DevTools 或 VS Code 可以連接進行 CPU profiling、heap snapshot、設斷點等偵錯操作。",
    tags: ["inspect", "debugging", "devtools", "profiling"],
  },
  {
    id: "nodejs-028",
    category: "nodejs",
    difficulty: "advanced",
    topic: "效能調優",
    type: "true-false",
    question:
      "Node.js 的事件迴圈中，setImmediate 的 callback 一定比 setTimeout(fn, 0) 更早執行。",
    answer: "false",
    explanation:
      "在主模組（非 I/O callback）中，setImmediate 和 setTimeout(fn, 0) 的執行順序是不確定的，取決於行程效能。但在 I/O callback 中，setImmediate 一定比 setTimeout(fn, 0) 更早執行。",
    tags: ["event-loop", "setImmediate", "setTimeout", "timers"],
  },
  {
    id: "nodejs-029",
    category: "nodejs",
    difficulty: "advanced",
    topic: "自訂 Stream",
    type: "multiple-choice",
    question: "實作自訂 Readable Stream 時，必須覆寫（override）哪個方法？",
    options: ["A. _write()", "B. _read()", "C. _transform()", "D. _flush()"],
    answer: "B",
    explanation:
      "自訂 Readable Stream 必須實作 _read() 方法，在其中使用 this.push(chunk) 推送資料。當 push(null) 被呼叫時代表資料流結束。_write() 是 Writable，_transform() 和 _flush() 是 Transform stream 的方法。",
    tags: ["stream", "readable", "_read", "custom-stream"],
  },
  {
    id: "nodejs-030",
    category: "nodejs",
    difficulty: "advanced",
    topic: "自訂 Stream",
    type: "multiple-choice",
    question: "Transform Stream 與 Duplex Stream 的主要差異是？",
    options: [
      "A. Transform 繼承自 EventEmitter，Duplex 不是",
      "B. Transform Stream 的輸出是根據輸入計算而來；Duplex Stream 的讀寫端彼此獨立",
      "C. Duplex 比 Transform 效能更好",
      "D. Transform 只能處理文字，Duplex 可處理二進位",
    ],
    answer: "B",
    explanation:
      "Transform Stream 是特殊的 Duplex Stream，它的 readable 端（輸出）是由 writable 端（輸入）經過轉換後產生的（例如壓縮、加密）。Duplex Stream 的讀寫兩端完全獨立，如 TCP socket。",
    tags: ["stream", "transform", "duplex", "custom-stream"],
  },
];
