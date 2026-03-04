import { type Question } from "@/types";

export const webQuestions: Question[] = [
  // ===== Beginner (10 題) =====
  {
    id: "web-001",
    category: "web",
    difficulty: "beginner",
    topic: "CSS Box Model",
    type: "multiple-choice",
    question:
      "CSS Box Model 由內到外的四個層次依序是？",
    options: [
      "A. content → border → padding → margin",
      "B. content → padding → border → margin",
      "C. margin → border → padding → content",
      "D. padding → content → border → margin",
    ],
    answer: "B",
    explanation:
      "CSS Box Model 由內到外依序為：content（內容區）→ padding（內距）→ border（邊框）→ margin（外距）。記憶方式：由內到外像是穿衣服，內容是身體、padding 是內衣、border 是外套、margin 是與他人的距離。",
    tags: ["css", "box-model", "layout"],
  },
  {
    id: "web-002",
    category: "web",
    difficulty: "beginner",
    topic: "CSS Box Model",
    type: "multiple-choice",
    question:
      "設定 box-sizing: border-box 後，width: 200px 代表什麼？",
    options: [
      "A. content 區域寬度為 200px，不含 padding 和 border",
      "B. content + padding + border 的總寬度為 200px",
      "C. content + padding + border + margin 的總寬度為 200px",
      "D. 只有 border 的寬度為 200px",
    ],
    answer: "B",
    explanation:
      "box-sizing: border-box（IE 盒模型）讓 width 包含 content + padding + border 的總和，使版面計算更直覺。預設的 box-sizing: content-box（標準盒模型）width 只代表 content 寬度，加上 padding 和 border 後實際寬度會更大。",
    tags: ["css", "box-sizing", "border-box"],
  },
  {
    id: "web-003",
    category: "web",
    difficulty: "beginner",
    topic: "HTML 語意標籤",
    type: "multiple-choice",
    question:
      "以下哪個 HTML 標籤最適合用來包裹網站的主要導航連結？",
    options: ["A. <div>", "B. <section>", "C. <nav>", "D. <header>"],
    answer: "C",
    explanation:
      "nav 是 HTML5 語意標籤，專門用於包裹主要導航連結區塊。使用語意標籤的好處：提升 SEO、改善無障礙（screen reader 可以跳到導航）、程式碼可讀性更高。div 沒有語意；section 用於頁面的一個主題區塊；header 用於頁首區域。",
    tags: ["html", "semantic", "nav", "accessibility"],
  },
  {
    id: "web-004",
    category: "web",
    difficulty: "beginner",
    topic: "HTML 語意標籤",
    type: "true-false",
    question:
      "HTML5 的 <article> 標籤和 <section> 標籤可以互換使用，因為兩者都用於劃分頁面區塊。",
    answer: "false",
    explanation:
      "兩者有不同語意：article 用於可以獨立存在的完整內容（如部落格文章、新聞稿、論壇貼文），拿出來單獨看仍有意義；section 用於頁面中的主題性區塊，通常有標題，但內容不一定能獨立存在。article 內可以有多個 section；section 內也可以有多個 article。",
    tags: ["html", "semantic", "article", "section"],
  },
  {
    id: "web-005",
    category: "web",
    difficulty: "beginner",
    topic: "HTTP 狀態碼",
    type: "multiple-choice",
    question:
      "當 RESTful API 成功建立新資源後，最適合回傳的 HTTP 狀態碼是？",
    options: ["A. 200 OK", "B. 201 Created", "C. 204 No Content", "D. 202 Accepted"],
    answer: "B",
    explanation:
      "201 Created 表示請求成功且新資源已被建立，應在 Location 標頭中回傳新資源的 URL。200 OK 用於一般成功的 GET/PUT 請求；204 No Content 用於成功但沒有回傳內容（如 DELETE）；202 Accepted 用於非同步處理（請求已接受但尚未完成）。",
    tags: ["http", "status-code", "rest-api", "201"],
  },
  {
    id: "web-006",
    category: "web",
    difficulty: "beginner",
    topic: "HTTP 狀態碼",
    type: "fill-blank",
    question:
      "HTTP 狀態碼 4__ 系列代表客戶端錯誤，其中 404 表示___（兩個字）。",
    answer: "找不到",
    explanation:
      "404 Not Found 表示伺服器找不到請求的資源。常見 4xx 錯誤：400 Bad Request（請求格式錯誤）、401 Unauthorized（未認證）、403 Forbidden（已認證但無權限）、404 Not Found（資源不存在）、409 Conflict（資源衝突）、429 Too Many Requests（超過速率限制）。",
    tags: ["http", "status-code", "404"],
  },
  {
    id: "web-007",
    category: "web",
    difficulty: "beginner",
    topic: "DOM querySelector",
    type: "multiple-choice",
    question:
      "以下哪個選擇器可以選取 class 為 'btn' 且 type 屬性為 'submit' 的元素？",
    options: [
      "A. document.querySelector('btn[type=submit]')",
      "B. document.querySelector('.btn[type=\"submit\"]')",
      "C. document.querySelector('#btn type=submit')",
      "D. document.querySelector('button.submit')",
    ],
    answer: "B",
    explanation:
      "querySelector 使用 CSS 選擇器語法：.btn 選取 class 為 btn 的元素，[type=\"submit\"] 選取 type 屬性等於 submit 的元素，兩者組合即可同時篩選。A 缺少 class 選擇器的點（.）；C 語法錯誤；D 選的是 button 元素且 class 為 submit。",
    tags: ["dom", "querySelector", "css-selector"],
  },
  {
    id: "web-008",
    category: "web",
    difficulty: "beginner",
    topic: "DOM querySelector",
    type: "multiple-choice",
    question:
      "document.querySelector() 與 document.querySelectorAll() 的差異是？",
    options: [
      "A. querySelector 較快，querySelectorAll 較準確",
      "B. querySelector 回傳第一個匹配元素或 null；querySelectorAll 回傳所有匹配元素的 NodeList",
      "C. querySelectorAll 只能用於 id 選擇器",
      "D. 兩者完全相同，只是命名不同",
    ],
    answer: "B",
    explanation:
      "querySelector 找到第一個匹配的元素即停止，回傳該元素或 null（找不到時）。querySelectorAll 找出所有匹配元素，回傳 NodeList（類陣列物件）。NodeList 不是陣列，需用 Array.from() 或展開運算子（[...nodeList]）轉換後才能使用 map、filter 等方法。",
    tags: ["dom", "querySelector", "querySelectorAll", "NodeList"],
  },
  {
    id: "web-009",
    category: "web",
    difficulty: "beginner",
    topic: "HTML 語意標籤",
    type: "fill-blank",
    question:
      "在 HTML5 中，用來表示與主要內容相關的側邊欄或附加資訊（如廣告、相關連結）的語意標籤是 <___>。",
    answer: "aside",
    explanation:
      "aside 標籤用於包裹與主要內容有間接關係的內容，如側邊欄、相關文章連結、廣告、拉引框（pull quote）等。其他常用語意標籤：main（頁面主要內容，每頁只能有一個）、footer（頁尾）、header（頁首）。",
    tags: ["html", "semantic", "aside"],
  },
  {
    id: "web-010",
    category: "web",
    difficulty: "beginner",
    topic: "HTTP 狀態碼",
    type: "multiple-choice",
    question:
      "HTTP 狀態碼 301 和 302 的差異是？",
    options: [
      "A. 301 是暫時重定向，302 是永久重定向",
      "B. 301 是永久重定向，302 是暫時重定向",
      "C. 兩者都是永久重定向，差別在是否快取",
      "D. 301 用於 GET，302 用於 POST",
    ],
    answer: "B",
    explanation:
      "301 Moved Permanently（永久重定向）：瀏覽器和搜尋引擎會更新書籤和索引，以後直接訪問新 URL；302 Found（暫時重定向）：瀏覽器本次重定向，但不更新書籤，下次仍會訪問原 URL。SEO 上應使用 301 確保權重傳遞。",
    tags: ["http", "status-code", "redirect", "301", "302"],
  },

  // ===== Intermediate (10 題) =====
  {
    id: "web-011",
    category: "web",
    difficulty: "intermediate",
    topic: "Flexbox",
    type: "multiple-choice",
    question:
      "在 Flexbox 中，要讓子元素在主軸（main axis）上均勻分佈且兩端不留空白，應使用哪個 justify-content 值？",
    options: [
      "A. justify-content: center",
      "B. justify-content: space-between",
      "C. justify-content: space-around",
      "D. justify-content: flex-start",
    ],
    answer: "B",
    explanation:
      "space-between：子元素之間均勻分佈，首尾元素貼緊容器邊緣（兩端無空白）。space-around：每個元素兩側有相同空白（首尾有一半空白）。space-evenly：所有空白完全相等（含首尾）。center 置中；flex-start 靠起始端。",
    tags: ["css", "flexbox", "justify-content"],
  },
  {
    id: "web-012",
    category: "web",
    difficulty: "intermediate",
    topic: "Flexbox / Grid",
    type: "multiple-choice",
    question:
      "CSS Grid 與 Flexbox 最主要的應用場景差異是？",
    options: [
      "A. Flexbox 適合二維版面；Grid 適合一維版面",
      "B. Grid 適合二維版面（行列同時控制）；Flexbox 適合一維版面（單一方向排列）",
      "C. Grid 只能用於響應式設計；Flexbox 適合所有情境",
      "D. 兩者完全等效，只是語法不同",
    ],
    answer: "B",
    explanation:
      "Flexbox 是一維布局模型，沿單一軸（行或列）排列元素，適合導航列、按鈕群組、卡片排列等；CSS Grid 是二維布局模型，同時控制行和列，適合整體頁面布局、複雜的格子排版。實務上兩者可搭配使用：Grid 做整體布局，Flexbox 做元件內部排列。",
    tags: ["css", "grid", "flexbox", "layout"],
  },
  {
    id: "web-013",
    category: "web",
    difficulty: "intermediate",
    topic: "CORS",
    type: "multiple-choice",
    question:
      "CORS（Cross-Origin Resource Sharing）的預檢請求（Preflight Request）使用的 HTTP 方法是？",
    options: ["A. GET", "B. POST", "C. OPTIONS", "D. HEAD"],
    answer: "C",
    explanation:
      "瀏覽器在發送非簡單請求（如帶自訂標頭的 POST、PUT、DELETE）前，會先發送 OPTIONS 請求（預檢）詢問伺服器是否允許此跨域請求。伺服器需回傳 Access-Control-Allow-Origin、Access-Control-Allow-Methods 等標頭表示許可。",
    tags: ["cors", "preflight", "options", "http"],
  },
  {
    id: "web-014",
    category: "web",
    difficulty: "intermediate",
    topic: "CORS",
    type: "true-false",
    question:
      "CORS 是瀏覽器的安全機制，在伺服器端設定 Access-Control-Allow-Origin: * 後，所有跨域 AJAX 請求都可以成功，包含帶有 Cookie 的請求。",
    answer: "false",
    explanation:
      "Access-Control-Allow-Origin: * 允許任意來源存取，但這會禁用帶有憑證（credentials）的請求。若需傳送 Cookie，必須：1) 伺服器設定明確的 origin（不能用 *），2) 同時設定 Access-Control-Allow-Credentials: true，3) 前端 fetch 加上 credentials: 'include'。",
    tags: ["cors", "credentials", "cookie", "security"],
  },
  {
    id: "web-015",
    category: "web",
    difficulty: "intermediate",
    topic: "Event delegation",
    type: "multiple-choice",
    question:
      "事件委派（Event Delegation）的核心原理是什麼？",
    options: [
      "A. 將事件直接綁定到每個子元素上",
      "B. 利用事件冒泡，在父元素上監聽並判斷事件來源的子元素",
      "C. 使用 preventDefault() 攔截事件",
      "D. 在 window 物件上監聽所有事件",
    ],
    answer: "B",
    explanation:
      "事件委派利用事件冒泡（event bubbling）機制，將監聽器設在父元素上，當子元素觸發事件時，事件冒泡到父元素，再用 event.target 判斷是哪個子元素觸發。優點：減少監聽器數量（不需為每個子元素個別綁定）、動態新增的子元素自動支援。",
    tags: ["dom", "event-delegation", "event-bubbling"],
  },
  {
    id: "web-016",
    category: "web",
    difficulty: "intermediate",
    topic: "Event delegation",
    type: "fill-blank",
    question:
      "在事件處理函式中，event.___ 指向實際觸發事件的元素，event.currentTarget 指向綁定監聽器的元素。",
    answer: "target",
    explanation:
      "event.target 是實際觸發事件的元素（可能是子元素）；event.currentTarget 是當前事件監聽器綁定的元素。事件委派中，currentTarget 是父元素，target 是被點擊的子元素，透過 target 可判斷具體點擊了哪個子元素。",
    tags: ["dom", "event", "target", "currentTarget"],
  },
  {
    id: "web-017",
    category: "web",
    difficulty: "intermediate",
    topic: "localStorage vs sessionStorage",
    type: "multiple-choice",
    question:
      "localStorage 與 sessionStorage 最主要的差異是？",
    options: [
      "A. localStorage 可存較大資料；sessionStorage 有 1MB 限制",
      "B. localStorage 資料永久保存直到主動清除；sessionStorage 資料在分頁/瀏覽器關閉後消失",
      "C. sessionStorage 可跨域存取；localStorage 不行",
      "D. localStorage 只能存字串；sessionStorage 可存任意型別",
    ],
    answer: "B",
    explanation:
      "localStorage 資料持久存在，直到使用者或程式主動清除（localStorage.clear()）。sessionStorage 資料的生命週期是當前的瀏覽器 session（分頁），關閉分頁後資料消失。兩者都：同源策略限制（不可跨域）、只能存字串（需 JSON.stringify/parse 處理物件）、約 5-10MB 限制。",
    tags: ["web-storage", "localStorage", "sessionStorage"],
  },
  {
    id: "web-018",
    category: "web",
    difficulty: "intermediate",
    topic: "localStorage vs sessionStorage",
    type: "true-false",
    question:
      "Cookie、localStorage 和 sessionStorage 都可以透過 JavaScript 存取，因此三者的安全性相同。",
    answer: "false",
    explanation:
      "Cookie 可設定 HttpOnly 旗標，使 JavaScript 無法讀取（document.cookie），有效防止 XSS 攻擊竊取 Cookie。localStorage 和 sessionStorage 無此保護，JavaScript 一律可存取。因此對於敏感資料（如認證 token），HttpOnly Cookie 比 localStorage 安全。",
    tags: ["security", "cookie", "localStorage", "XSS", "HttpOnly"],
  },
  {
    id: "web-019",
    category: "web",
    difficulty: "intermediate",
    topic: "Flexbox",
    type: "multiple-choice",
    question:
      "CSS Grid 中，grid-template-columns: repeat(3, 1fr) 的意思是？",
    options: [
      "A. 建立三行，每行高度相等",
      "B. 建立三欄，每欄寬度佔剩餘空間的 1/3",
      "C. 第一欄佔 1px，第三欄佔 fr 單位",
      "D. 建立三欄，每欄最小寬度為 1px",
    ],
    answer: "B",
    explanation:
      "fr（fractional unit，分數單位）代表剩餘空間的分配比例。repeat(3, 1fr) 建立三欄，每欄各佔 1fr，總計 3fr，所以每欄佔 1/3 的可用空間。若要建立三行，應用 grid-template-rows。fr 單位讓響應式布局更靈活，不需計算百分比。",
    tags: ["css", "grid", "fr-unit", "repeat"],
  },
  {
    id: "web-020",
    category: "web",
    difficulty: "intermediate",
    topic: "CORS",
    type: "fill-blank",
    question:
      "簡單請求（Simple Request）不會觸發 CORS 預檢，條件之一是 Content-Type 必須是 application/x-www-form-urlencoded、multipart/form-data 或 ___。",
    answer: "text/plain",
    explanation:
      "簡單請求的條件：1) 方法為 GET、POST、HEAD 之一；2) Content-Type 限於 text/plain、application/x-www-form-urlencoded、multipart/form-data；3) 沒有自訂標頭。使用 application/json 或自訂標頭時就會觸發預檢（OPTIONS 請求）。",
    tags: ["cors", "simple-request", "content-type"],
  },

  // ===== Advanced (10 題) =====
  {
    id: "web-021",
    category: "web",
    difficulty: "advanced",
    topic: "Critical Rendering Path",
    type: "multiple-choice",
    question:
      "瀏覽器的關鍵渲染路徑（Critical Rendering Path）正確的順序是？",
    options: [
      "A. HTML 解析 → JavaScript 執行 → CSS 解析 → 渲染樹 → 布局 → 繪製",
      "B. HTML 解析 → CSS 解析（同時）→ 渲染樹（DOM + CSSOM）→ 布局 → 繪製",
      "C. CSS 解析 → HTML 解析 → 渲染樹 → 繪製 → 布局",
      "D. DOM 建立 → 渲染樹 → CSSOM 建立 → 布局 → 繪製",
    ],
    answer: "B",
    explanation:
      "關鍵渲染路徑：1) 解析 HTML 建立 DOM Tree；2) 解析 CSS 建立 CSSOM Tree（兩者可並行）；3) 合併 DOM + CSSOM 建立 Render Tree（排除隱藏元素）；4) Layout（計算幾何位置和大小）；5) Paint（像素繪製）；6) Composite（合成層）。JavaScript 執行會阻塞 HTML 解析。",
    tags: ["browser", "critical-rendering-path", "performance"],
  },
  {
    id: "web-022",
    category: "web",
    difficulty: "advanced",
    topic: "Critical Rendering Path",
    type: "multiple-choice",
    question:
      "在 HTML 中，為什麼建議將 CSS link 標籤放在 head，JavaScript script 標籤放在 body 結尾？",
    options: [
      "A. 這只是程式碼風格慣例，沒有效能差異",
      "B. CSS 在 head 讓渲染樹更早可用；script 在 body 結尾避免阻塞 DOM 解析",
      "C. JavaScript 在 head 執行順序錯誤",
      "D. CSS 必須在 HTML 完全載入後才能套用",
    ],
    answer: "B",
    explanation:
      "CSS 是渲染阻塞資源（render-blocking），放 head 讓 CSSOM 更早建立，避免 FOUC（Flash of Unstyled Content）。script 標籤是解析阻塞資源（parser-blocking），會暫停 HTML 解析，放 body 結尾確保 DOM 已建立。現代做法也可用 defer（不阻塞解析，DOM 建立後執行）或 async（非同步載入，載入後立即執行）。",
    tags: ["browser", "css", "javascript", "performance", "rendering"],
  },
  {
    id: "web-023",
    category: "web",
    difficulty: "advanced",
    topic: "Service Worker",
    type: "multiple-choice",
    question:
      "Service Worker 的主要功能是什麼？",
    options: [
      "A. 替代 Web Worker 執行 CPU 密集運算",
      "B. 作為瀏覽器和網路之間的代理，攔截網路請求、實作快取策略、支援離線存取",
      "C. 管理 DOM 更新，減少 reflow",
      "D. 提供伺服器端渲染（SSR）功能",
    ],
    answer: "B",
    explanation:
      "Service Worker 是在背景執行的 Worker 腳本，作為網路請求的代理（proxy），可攔截 fetch 請求、自訂快取策略（Cache API）、實作離線功能（PWA 的核心）、推播通知（Push Notifications）。它與 DOM 無法直接互動，且只能在 HTTPS（或 localhost）下運作。",
    tags: ["service-worker", "PWA", "cache", "offline"],
  },
  {
    id: "web-024",
    category: "web",
    difficulty: "advanced",
    topic: "Service Worker",
    type: "true-false",
    question:
      "Service Worker 可以在 HTTP（非 HTTPS）的網站上正常運作，以方便本地開發測試。",
    answer: "false",
    explanation:
      "Service Worker 基於安全考量，只能在 HTTPS 網站上運作（防止中間人攻擊）。例外是 localhost（127.0.0.1）可以在 HTTP 下開發測試。部署到生產環境時必須使用 HTTPS，這也是 PWA 的基本要求之一。",
    tags: ["service-worker", "HTTPS", "security", "PWA"],
  },
  {
    id: "web-025",
    category: "web",
    difficulty: "advanced",
    topic: "Web Performance",
    type: "multiple-choice",
    question:
      "Core Web Vitals 中，LCP（Largest Contentful Paint）衡量的是什麼？",
    options: [
      "A. 頁面上最大圖片的檔案大小",
      "B. 頁面上最大的可見內容元素完成渲染所需的時間",
      "C. 使用者首次與頁面互動的延遲時間",
      "D. 頁面布局發生意外位移的累積量",
    ],
    answer: "B",
    explanation:
      "LCP 衡量主要內容（最大可見元素，通常是主圖或標題文字）完成載入渲染的時間，反映使用者感知的載入速度。LCP 良好標準：< 2.5 秒。其他 Core Web Vitals：FID（First Input Delay，互動延遲）/ INP（Interaction to Next Paint）、CLS（Cumulative Layout Shift，版面位移）。",
    tags: ["web-performance", "core-web-vitals", "LCP"],
  },
  {
    id: "web-026",
    category: "web",
    difficulty: "advanced",
    topic: "Web Performance",
    type: "multiple-choice",
    question:
      "以下哪個技術可以有效避免圖片載入造成的 CLS（Cumulative Layout Shift）問題？",
    options: [
      "A. 使用 lazy loading 延遲載入所有圖片",
      "B. 在 img 標籤明確指定 width 和 height 屬性",
      "C. 將所有圖片轉為 WebP 格式",
      "D. 使用 CSS filter 替代圖片",
    ],
    answer: "B",
    explanation:
      "CLS 發生原因之一是圖片載入後撐大版面導致內容位移。在 img 標籤指定 width 和 height 後，瀏覽器會提前計算並預留圖片空間，即使圖片尚未載入也不會造成位移。現代 CSS 中搭配 height: auto 確保響應式也正常運作。",
    tags: ["web-performance", "CLS", "image", "layout-shift"],
  },
  {
    id: "web-027",
    category: "web",
    difficulty: "advanced",
    topic: "HTTP/2 vs HTTP/1.1",
    type: "multiple-choice",
    question:
      "HTTP/2 相較於 HTTP/1.1 最重要的改進是？",
    options: [
      "A. HTTP/2 使用 UDP 傳輸，速度更快",
      "B. HTTP/2 支援多路復用（Multiplexing），單一 TCP 連線可並行傳輸多個請求/回應",
      "C. HTTP/2 取消了 TLS/SSL 加密要求",
      "D. HTTP/2 將 Header 改為 JSON 格式，更易讀",
    ],
    answer: "B",
    explanation:
      "HTTP/2 的核心改進：1) 多路復用（Multiplexing）：單一 TCP 連線並行傳輸多個請求，解決 HTTP/1.1 的隊頭阻塞（Head-of-Line Blocking）問題；2) Header 壓縮（HPACK）；3) Server Push；4) 二進位協定（而非文字）。HTTP/1.1 每個請求需要獨立連線，瀏覽器同域名最多 6 個並行連線。",
    tags: ["http2", "http", "multiplexing", "performance"],
  },
  {
    id: "web-028",
    category: "web",
    difficulty: "advanced",
    topic: "HTTP/2 vs HTTP/1.1",
    type: "true-false",
    question:
      "HTTP/2 相對於 HTTP/1.1，在實務上的主要優勢之一是「Domain Sharding」技術不再必要甚至可能有害。",
    answer: "true",
    explanation:
      "HTTP/1.1 時代，為了突破瀏覽器同域名 6 個連線的限制，會使用 Domain Sharding（將資源分散到多個子域名）。HTTP/2 的多路復用讓單一連線就能並行處理所有請求，Domain Sharding 反而會增加 DNS 查詢、TCP 握手和 TLS 協商的開銷，降低效能。",
    tags: ["http2", "domain-sharding", "performance", "http"],
  },
  {
    id: "web-029",
    category: "web",
    difficulty: "advanced",
    topic: "Critical Rendering Path",
    type: "fill-blank",
    question:
      "HTML5 的 script 標籤屬性中，___ 屬性讓腳本在背景非同步下載，但等 HTML 解析完成後（DOMContentLoaded 前）才執行，且保持腳本的執行順序。",
    answer: "defer",
    explanation:
      "defer：非同步下載不阻塞解析，在 DOMContentLoaded 事件前、按順序執行。async：非同步下載不阻塞解析，下載完成立即執行（不保證順序），適合無依賴的獨立腳本（如分析腳本）。不加屬性（預設）：下載時阻塞 HTML 解析，立即執行。",
    tags: ["html", "script", "defer", "async", "performance"],
  },
  {
    id: "web-030",
    category: "web",
    difficulty: "advanced",
    topic: "Web Performance",
    type: "multiple-choice",
    question:
      "以下哪個策略最適合讓使用者頭像縮圖（thumbnails）快速顯示，同時讓使用者點擊後的大圖也快速載入？",
    options: [
      "A. 所有圖片一次全部載入",
      "B. 使用 loading='lazy' 延遲載入視窗外圖片，並使用 srcset 提供不同解析度版本",
      "C. 將所有圖片轉為 base64 內嵌在 HTML 中",
      "D. 只載入縮圖，點擊後再重新請求",
    ],
    answer: "B",
    explanation:
      "loading='lazy'：瀏覽器原生懶加載，僅在圖片進入可視區域時才載入，減少初始載入量。srcset：提供不同解析度圖片，瀏覽器根據螢幕 DPR 和容器大小選擇最適合的圖片，避免在行動裝置下載不必要的大圖。兩者搭配是現代圖片效能最佳實踐。",
    tags: ["web-performance", "lazy-loading", "srcset", "image-optimization"],
  },
];
