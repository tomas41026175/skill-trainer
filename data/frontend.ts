import { type Question } from "@/types";

export const frontendQuestions: Question[] = [
  // ===== Beginner (10 題) =====
  {
    id: "fe-001",
    category: "frontend",
    difficulty: "beginner",
    topic: "狀態機基礎",
    type: "multiple-choice",
    question: "狀態機（State Machine）的核心組成要素有哪三個？",
    options: [
      { label: "A", value: "變數、函式、類別" },
      { label: "B", value: "狀態（State）、動作（Action）、轉換（Transition）" },
      { label: "C", value: "Props、State、Context" },
      { label: "D", value: "Reducer、Action、Selector" },
    ],
    answer: "B",
    explanation:
      "狀態機由三個要素組成：State（元件現在『是什麼』）、Action（發生了『什麼事』）、Transition（State + Action 決定下一個 State）。這三者完全切割：事件只負責發送 Action，狀態機決定下一個 State，UI 由 State 決定。",
    tags: ["state-machine", "state", "action", "transition"],
  },
  {
    id: "fe-002",
    category: "frontend",
    difficulty: "beginner",
    topic: "狀態機基礎",
    type: "true-false",
    question:
      "在狀態機設計中，同一個 Action（例如 click）在不同 State 下可以產生不同的結果。",
    answer: "true",
    explanation:
      "這是狀態機最核心的特性。例如 click 這個 Action：在 closed 狀態下觸發會開啟 dropdown；在 error 狀態下觸發會重試 API 呼叫；在 loading 狀態下觸發什麼都不做。同一個 Action，不同 State，不同結果。",
    tags: ["state-machine", "action", "transition"],
  },
  {
    id: "fe-003",
    category: "frontend",
    difficulty: "beginner",
    topic: "狀態管理",
    type: "multiple-choice",
    question:
      "以下哪種方式描述「按鈕狀態」是最佳實踐？",
    options: [
      { label: "A", value: "const [isLoading, setIsLoading] = useState(false); const [isError, setIsError] = useState(false);" },
      { label: "B", value: "const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');" },
      { label: "C", value: "const [state, setState] = useState({ loading: false, error: false, success: false });" },
      { label: "D", value: "const status = useRef('idle');" },
    ],
    answer: "B",
    explanation:
      "使用 union type 的單一 status 是最佳實踐。多個 boolean（選項 A、C）的問題：isLoading=true 且 isError=true 同時發生是無效狀態，但 TypeScript 無法阻止。status: 'loading' | 'error' 確保任何時刻只有一種狀態，不可能進入矛盾狀態，且新增狀態只需加 union，不需新增變數。",
    tags: ["state-machine", "useState", "typescript", "anti-pattern"],
  },
  {
    id: "fe-004",
    category: "frontend",
    difficulty: "beginner",
    topic: "狀態機基礎",
    type: "multiple-choice",
    question:
      "以下哪個是「UI 狀態機的狀態」，而不是「資料狀態」？",
    options: [
      { label: "A", value: "已選取 0 個項目" },
      { label: "B", value: "已選取 1 個項目" },
      { label: "C", value: "下拉選單正在開啟中（動畫進行中）" },
      { label: "D", value: "已選取 3 個以上項目" },
    ],
    answer: "C",
    explanation:
      "UI 狀態機的狀態描述「元件現在在做什麼、呈現什麼畫面」，例如 opening、open、closed、loading。資料狀態描述「資料長什麼樣」，例如已選取幾個、清單是否為空。混淆兩者是常見錯誤：「已選取 1 個」是資料狀態，不是 UI 狀態機的狀態。",
    tags: ["state-machine", "ui-state", "data-state"],
  },
  {
    id: "fe-005",
    category: "frontend",
    difficulty: "beginner",
    topic: "元件設計",
    type: "multiple-choice",
    question:
      "設計 React 元件時，「受控模式（Controlled）」和「非受控模式（Uncontrolled）」的差異是？",
    options: [
      { label: "A", value: "受控模式只能用於表單元素；非受控模式可用於任何元件" },
      { label: "B", value: "受控模式由外部（父元件）管理 value；非受控模式元件自己管理內部狀態（defaultValue）" },
      { label: "C", value: "受控模式效能比較差；非受控模式效能比較好" },
      { label: "D", value: "受控模式使用 useState；非受控模式使用 useRef" },
    ],
    answer: "B",
    explanation:
      "受控模式：value 由外部傳入並完全控制，每次變更需透過 onChange 通知外部。非受控模式：元件用 defaultValue 設定初始值，之後自己管理狀態。優秀的元件應同時支援兩種模式，透過 useControllableState 抽象處理：有傳 value 就走受控，只傳 defaultValue 就走非受控。",
    tags: ["component-design", "controlled", "uncontrolled", "props"],
  },
  {
    id: "fe-006",
    category: "frontend",
    difficulty: "beginner",
    topic: "狀態機基礎",
    type: "fill-blank",
    question:
      "狀態機設計中，State 與 Action 完全___，事件（Event Handler）只負責發送 Action，不直接修改 UI。",
    answer: "切割",
    explanation:
      "State 與 Action 切割是狀態機的核心原則。Event Handler 只說『發生了什麼』（dispatch action），State Machine 決定『接下來是什麼狀態』（transition），UI 根據 State 渲染。好處：不可能進入無效狀態、測試容易（只測 state + action → next state）、新增功能不影響其他邏輯。",
    tags: ["state-machine", "separation-of-concerns"],
  },
  {
    id: "fe-007",
    category: "frontend",
    difficulty: "beginner",
    topic: "元件設計",
    type: "true-false",
    question:
      "React 元件的 onChange prop 和 onSuccess prop 功能相同，都是通知父元件狀態改變。",
    answer: "false",
    explanation:
      "兩者語意不同。onChange 是『值改變時』的即時通知，用於受控模式同步狀態（例如 input 每次輸入都觸發）。onSuccess 是『非同步操作成功後』的副作用回調，不影響元件本身的狀態機轉換。副作用（onSuccess、onError）屬於狀態機的外部效應，由元件執行後通知外部，而非元件本身的狀態。",
    tags: ["component-design", "callbacks", "props"],
  },
  {
    id: "fe-008",
    category: "frontend",
    difficulty: "beginner",
    topic: "狀態機基礎",
    type: "multiple-choice",
    question:
      "一個「送出按鈕」的狀態機中，error 狀態下點擊按鈕，下一個狀態應該是？",
    options: [
      { label: "A", value: "idle（回到初始狀態，再讓使用者重新點擊）" },
      { label: "B", value: "loading（直接重試，不需要先回到 idle）" },
      { label: "C", value: "error（保持錯誤狀態，不做任何事）" },
      { label: "D", value: "success（樂觀地假設重試會成功）" },
    ],
    answer: "B",
    explanation:
      "error 狀態下按鈕通常顯示『重試』，點擊應直接觸發重試 → loading，而不是先回 idle 再讓使用者重新點擊（那樣需要兩次點擊才能重試，體驗差）。狀態轉換：error + click → loading，而非 error → idle → click → loading。",
    tags: ["state-machine", "ux", "transition"],
  },
  {
    id: "fe-009",
    category: "frontend",
    difficulty: "beginner",
    topic: "元件設計",
    type: "multiple-choice",
    question: "設計 Multi-Select 元件的 options prop 型別，以下哪個設計最合理？",
    options: [
      { label: "A", value: "options: string[]" },
      { label: "B", value: "options: Record<string, string>" },
      { label: "C", value: "options: Array<{ label: string; value: T }>" },
      { label: "D", value: "options: object[]" },
    ],
    answer: "C",
    explanation:
      "options: string[] 太限制，無法支援不同 label 和 value。Record<string, string> 失去順序保證。object[] 完全沒有型別安全。Array<{ label: string; value: T }> 最合理：label 用於顯示（固定 string），value 是泛型（可以是 string、number 或自訂型別），且陣列有順序保證。",
    tags: ["component-design", "typescript", "generics", "options"],
  },
  {
    id: "fe-010",
    category: "frontend",
    difficulty: "beginner",
    topic: "無障礙設計",
    type: "multiple-choice",
    question:
      "以下哪個鍵盤操作在 Select / Dropdown 元件中是必須支援的標準行為？",
    options: [
      { label: "A", value: "只需要 Tab 和 Enter 就足夠了" },
      { label: "B", value: "上下方向鍵移動選項、Enter 選取、Escape 關閉並 focus 回 Trigger" },
      { label: "C", value: "鍵盤操作是選配功能，有滑鼠操作就夠了" },
      { label: "D", value: "只需要上下方向鍵" },
    ],
    answer: "B",
    explanation:
      "根據 WAI-ARIA Combobox Pattern，標準鍵盤操作包含：↑↓ 移動 highlight、Enter/Space 選取、Escape 關閉並將 focus 歸還 trigger、Tab 關閉並移至下一個 focusable 元素、Home/End 跳到第一/最後選項。Escape 後 focus 必須回到 trigger（不是 focusout），否則使用者不知道 focus 在哪裡。",
    tags: ["accessibility", "keyboard", "a11y", "aria"],
  },

  // ===== Intermediate (10 題) =====
  {
    id: "fe-011",
    category: "frontend",
    difficulty: "intermediate",
    topic: "狀態機應用",
    type: "multiple-choice",
    question:
      "搜尋框元件有 300ms debounce。使用者快速連續輸入時，debounce 計時尚未結束就又輸入了新字元，狀態應該如何轉換？",
    options: [
      { label: "A", value: "debouncing → searching（立即觸發搜尋）" },
      { label: "B", value: "debouncing → debouncing（重置計時，維持相同狀態）" },
      { label: "C", value: "debouncing → idle（回到初始）" },
      { label: "D", value: "debouncing → error（視為操作錯誤）" },
    ],
    answer: "B",
    explanation:
      "debounce 的語意是『停止輸入一段時間後才觸發』。使用者繼續輸入時，應重置計時並維持 debouncing 狀態，等到真正停止輸入才進入 searching。如果每次輸入都觸發 API（選項 A），就失去 debounce 的意義。狀態機中自我循環（self-transition）是完全合法的：debouncing + typed → debouncing（重置計時）。",
    tags: ["state-machine", "debounce", "search", "transition"],
  },
  {
    id: "fe-012",
    category: "frontend",
    difficulty: "intermediate",
    topic: "狀態機應用",
    type: "multiple-choice",
    question:
      "Multi-Select Dropdown 的狀態機中，為什麼需要 opening 和 closing 這兩個過渡狀態，而不是直接 closed ↔ open？",
    options: [
      { label: "A", value: "這只是為了效能優化，讓 React 批次更新" },
      { label: "B", value: "動畫期間需要一個狀態來防止重複觸發，並確保動畫結束後才真正 unmount 元件" },
      { label: "C", value: "opening 狀態是為了等待 API 資料載入" },
      { label: "D", value: "這是 ARIA 規範要求的必要狀態" },
    ],
    answer: "B",
    explanation:
      "過渡狀態（opening/closing）解決兩個問題：1) 防止使用者在動畫進行中快速重複點擊造成狀態混亂；2) closing 狀態讓 exit 動畫有時間播完，才真正 unmount 元件（若直接 closed 就立即 unmount，動畫來不及播）。沒有過渡狀態，元件可能在動畫一半時被強制 unmount，造成視覺 glitch。",
    tags: ["state-machine", "animation", "dropdown", "transition"],
  },
  {
    id: "fe-013",
    category: "frontend",
    difficulty: "intermediate",
    topic: "元件設計",
    type: "true-false",
    question:
      "React 元件中，filteredOptions（從 options 根據 searchQuery 篩選的結果）應該用 useState 存起來，方便後續使用。",
    answer: "false",
    explanation:
      "filteredOptions 是衍生狀態（derived state）：它完全由 options 和 searchQuery 決定，不需要獨立存儲。應用 useMemo 計算：const filteredOptions = useMemo(() => options.filter(...), [options, searchQuery])。存儲衍生狀態的問題：需要額外同步（options 或 searchQuery 改變時要記得更新 filteredOptions）、容易造成資料不一致。",
    tags: ["component-design", "derived-state", "useMemo", "anti-pattern"],
  },
  {
    id: "fe-014",
    category: "frontend",
    difficulty: "intermediate",
    topic: "元件設計",
    type: "multiple-choice",
    question:
      "設計 Multi-Select 的 overflow 顯示（選取項目超出顯示空間）時，以下哪個 API 設計最有彈性？",
    options: [
      { label: "A", value: "只提供 maxVisible prop 控制顯示幾個 tag" },
      { label: "B", value: "只提供 scrollable prop 切換捲動模式" },
      { label: "C", value: "提供 overflowMode（'count'|'scroll'|'wrap'）作為預設，同時支援 renderSelectedItems 讓使用端完全自訂" },
      { label: "D", value: "不處理 overflow，讓使用端自己用 CSS 處理" },
    ],
    answer: "C",
    explanation:
      "好的元件 API 設計原則：提供合理的預設行為（overflowMode 涵蓋 80% 使用情境），同時提供逃生口（renderSelectedItems）讓使用端完全自訂剩下的 20%。有 renderSelectedItems 就優先使用，沒有才 fallback 到 overflowMode。這是 Headless + 內建樣式的平衡設計。",
    tags: ["component-design", "api-design", "headless", "renderProps"],
  },
  {
    id: "fe-015",
    category: "frontend",
    difficulty: "intermediate",
    topic: "TypeScript 型別",
    type: "multiple-choice",
    question:
      "以下哪個 Option 型別設計，能同時保持 label 和 value 的精確型別，又允許任意額外欄位？",
    options: [
      { label: "A", value: "interface Option<T> { label: string; value: T; [key: string]: unknown }" },
      { label: "B", value: "type Option<T> = Record<string, unknown> & { label: string; value: T }" },
      { label: "C", value: "type Option<T> = { label: string; value: T } | Record<string, unknown>" },
      { label: "D", value: "interface Option<T> extends Record<string, T> { label: string; value: T }" },
    ],
    answer: "B",
    explanation:
      "選項 A 的問題：interface 中 [key: string]: unknown 會讓 label 和 value 的型別也變成 unknown（因為 string index signature 的限制）。選項 B 用 intersection type，右側的具名欄位（label: string, value: T）會覆蓋左側的 Record<string, unknown>，所以 label 保持 string，value 保持 T，其他欄位是 unknown。選項 C 是 union，語意錯誤。",
    tags: ["typescript", "generics", "index-signature", "intersection"],
  },
  {
    id: "fe-016",
    category: "frontend",
    difficulty: "intermediate",
    topic: "無障礙設計",
    type: "multiple-choice",
    question:
      "Modal 元件關閉後，focus 應該移動到哪裡？",
    options: [
      { label: "A", value: "document.body（頁面根元素）" },
      { label: "B", value: "觸發開啟 Modal 的元素（trigger element）" },
      { label: "C", value: "頁面上第一個 focusable 元素" },
      { label: "D", value: "不需要特別處理，瀏覽器會自動管理" },
    ],
    answer: "B",
    explanation:
      "這是 ARIA Dialog Pattern 的規範。Modal 開啟時 focus 進入 Modal 內（Focus Trap）；Modal 關閉後，focus 必須回到觸發開啟的元素（通常是按鈕）。原因：使用鍵盤或螢幕閱讀器的使用者，需要知道自己的 focus 在哪裡。如果 focus 跑到 body 或第一個元素，使用者必須重新導航到之前的位置，體驗極差。",
    tags: ["accessibility", "modal", "focus-management", "aria"],
  },
  {
    id: "fe-017",
    category: "frontend",
    difficulty: "intermediate",
    topic: "狀態機應用",
    type: "fill-blank",
    question:
      "使用 useReducer 實作狀態機時，reducer 函式的第一個參數是目前的 ___，第二個參數是觸發的 Action。",
    answer: "State",
    explanation:
      "reducer(state, action) => nextState。這個簽名完美對應狀態機：目前 State + Action → 下一個 State。使用 useReducer 的優點：1) State 轉換邏輯集中在一個地方；2) 每個 case 處理一個狀態，清楚分離；3) 無效的狀態轉換可以直接 return state 忽略；4) 測試只需測 reducer(state, action)，不需要 render 元件。",
    tags: ["state-machine", "useReducer", "react"],
  },
  {
    id: "fe-018",
    category: "frontend",
    difficulty: "intermediate",
    topic: "效能",
    type: "true-false",
    question:
      "在 React 中，對子元件傳入一個 inline function（例如 onClick={() => handleClick(id)}）不會造成任何效能問題，因為 React 足夠聰明可以識別函式相同。",
    answer: "false",
    explanation:
      "每次父元件重新 render，inline function 都是新的 reference（即使邏輯相同），導致子元件的 props 改變。如果子元件是 React.memo 包裝的，這會破壞 memo 優化，造成不必要的重新渲染。解決方式：useCallback 建立穩定的 function reference（但只在子元件有 memo 且效能確實有問題時才需要，過早優化也是問題）。",
    tags: ["performance", "react", "memo", "useCallback"],
  },
  {
    id: "fe-019",
    category: "frontend",
    difficulty: "intermediate",
    topic: "元件設計",
    type: "multiple-choice",
    question:
      "以下哪個元件 API 設計符合「組合式（Compound Components）」模式？",
    options: [
      { label: "A", value: "<Select options={options} renderOption={fn} renderTrigger={fn} renderEmpty={fn} />" },
      { label: "B", value: "<Select value={value} onChange={onChange}><Select.Trigger /><Select.Content>{options.map(o => <Select.Item key={o.value} value={o.value}>{o.label}</Select.Item>)}</Select.Content></Select>" },
      { label: "C", value: "<Select config={{ options, trigger: { style }, content: { maxHeight } }} />" },
      { label: "D", value: "<Select>{(props) => <CustomSelect {...props} />}</Select>" },
    ],
    answer: "B",
    explanation:
      "Compound Components 模式讓元件拆分為多個子元件（Select.Trigger、Select.Content、Select.Item），透過 React Context 共享狀態。優點：使用端只需替換需要客製的子元件，不需要 fork 整個元件；加新功能加新子元件即可，不用堆 props。選項 A 是 Render Props；選項 C 是 Config Object；選項 D 是 Render Props 的變體。",
    tags: ["component-design", "compound-components", "api-design", "pattern"],
  },
  {
    id: "fe-020",
    category: "frontend",
    difficulty: "intermediate",
    topic: "狀態機應用",
    type: "multiple-choice",
    question:
      "搜尋框元件的狀態機中，searching 狀態下 API 失敗，下一個狀態應該是？",
    options: [
      { label: "A", value: "idle（回到初始，清空輸入）" },
      { label: "B", value: "error（獨立的錯誤狀態，不能再搜尋）" },
      { label: "C", value: "open（顯示空狀態或錯誤訊息，讓使用者可以繼續輸入）" },
      { label: "D", value: "searching（自動重試）" },
    ],
    answer: "C",
    explanation:
      "搜尋框 API 失敗後，不應該清空輸入（使用者的輸入是寶貴的）也不應該鎖住元件（讓使用者絕望）。最佳體驗：回到 open 狀態，在搜尋結果區域顯示錯誤訊息或空狀態，讓使用者可以繼續修改搜尋詞或重試。與按鈕的 error 狀態不同，搜尋框的錯誤通常是暫時性的，不需要獨立 error 狀態。",
    tags: ["state-machine", "ux", "error-handling", "search"],
  },

  // ===== Advanced (10 題) =====
  {
    id: "fe-021",
    category: "frontend",
    difficulty: "advanced",
    topic: "狀態機進階",
    type: "multiple-choice",
    question:
      "XState 中的 Guard（守衛條件）主要用途是什麼？",
    options: [
      { label: "A", value: "防止未授權的使用者觸發 Action" },
      { label: "B", value: "在相同的 State + Action 下，根據條件決定走向不同的下一個 State" },
      { label: "C", value: "限制某些 State 只能在特定時間進入" },
      { label: "D", value: "監聽 State 變化並觸發副作用" },
    ],
    answer: "B",
    explanation:
      "Guard（條件轉換）讓同一個 State + Action 可以根據 context 走向不同路徑。例如：搜尋框 idle + typed → 如果 onSearch 存在則 debouncing，否則 filtering（內建搜尋）。這避免了在 Action 裡寫 if/else 判斷，保持狀態機的宣告式（declarative）風格。XState 語法：{ on: { TYPED: [{ target: 'debouncing', cond: 'hasOnSearch' }, { target: 'filtering' }] } }",
    tags: ["state-machine", "xstate", "guard", "conditional-transition"],
  },
  {
    id: "fe-022",
    category: "frontend",
    difficulty: "advanced",
    topic: "效能",
    type: "multiple-choice",
    question:
      "實作 Virtual List（虛擬捲動）時，動態高度的列表項目（高度不固定）最主要的挑戰是什麼？",
    options: [
      { label: "A", value: "計算每個項目的 DOM 節點數量" },
      { label: "B", value: "在項目實際渲染前無法得知精確高度，必須估算或測量，而估算誤差會造成捲動位置偏移" },
      { label: "C", value: "動態高度的項目無法使用 CSS transform 優化" },
      { label: "D", value: "瀏覽器不支援動態高度的 overflow: auto" },
    ],
    answer: "B",
    explanation:
      "固定高度的 Virtual List 很容易：position = index * itemHeight。動態高度的挑戰：必須先渲染才知道高度，但 Virtual List 的前提是不渲染視窗外的項目，形成雞生蛋問題。常見解法：1) 估算初始高度（可能誤差），渲染後測量並更新；2) 用 ResizeObserver 監聽高度變化；3) 維護一個高度快取，捲動時根據快取計算位置。誤差累積會讓捲動到特定位置時跳動。",
    tags: ["performance", "virtual-list", "dynamic-height", "scroll"],
  },
  {
    id: "fe-023",
    category: "frontend",
    difficulty: "advanced",
    topic: "TypeScript 型別",
    type: "multiple-choice",
    question:
      "設計一個 useControllableState hook，同時支援受控和非受控模式。以下哪個簽名最正確？",
    options: [
      { label: "A", value: "function useControllableState<T>(value: T, defaultValue: T, onChange: (v: T) => void)" },
      { label: "B", value: "function useControllableState<T>({ value, defaultValue, onChange }: { value?: T; defaultValue?: T; onChange?: (v: T) => void }): [T, (v: T) => void]" },
      { label: "C", value: "function useControllableState<T>(props: { value: T; onChange: (v: T) => void })" },
      { label: "D", value: "function useControllableState<T>(isControlled: boolean, value: T)" },
    ],
    answer: "B",
    explanation:
      "正確簽名：value 和 onChange 都是 optional（受控時傳、非受控時不傳），defaultValue 也是 optional（非受控初始值）。回傳 [currentValue, setValue]，內部判斷：有 value prop 就是受控模式（外部掌控），沒有就用 internal state。isControlled = value !== undefined。setValue 時：非受控 → 更新 internal state；受控 → 只呼叫 onChange 通知外部。",
    tags: ["typescript", "hooks", "controlled", "uncontrolled", "generics"],
  },
  {
    id: "fe-024",
    category: "frontend",
    difficulty: "advanced",
    topic: "效能",
    type: "true-false",
    question:
      "在 React 18 的 Concurrent Mode 下，使用 useEffect 發送 API 請求時，必須處理 cleanup 來避免 race condition，因為 React 可能在結果回來前就 re-render 並再次執行 effect。",
    answer: "true",
    explanation:
      "React 18 Concurrent Mode 可能中斷並重新執行渲染和 effect。若不處理 cleanup，可能發生：effect 1 發送請求 → effect 2 發送請求 → effect 2 的結果先回來並更新 state → effect 1 的結果後來回來並覆蓋（舊資料蓋掉新資料）。解法：let cancelled = false; fetch().then(data => { if (!cancelled) setState(data) }); return () => { cancelled = true }; 或使用 AbortController。",
    tags: ["react", "useEffect", "race-condition", "concurrent-mode", "cleanup"],
  },
  {
    id: "fe-025",
    category: "frontend",
    difficulty: "advanced",
    topic: "元件設計",
    type: "multiple-choice",
    question:
      "以下哪個判斷標準最能評估一個複雜元件的 API 設計品質？",
    options: [
      { label: "A", value: "props 數量越少越好，少於 5 個 props 就是好設計" },
      { label: "B", value: "加一個新 feature 需要改的地方越少越好；80% 的使用情境零配置就能用" },
      { label: "C", value: "使用 TypeScript 泛型越多越好，展示型別系統的深度" },
      { label: "D", value: "元件的 bundle size 越小越好，不超過 10KB" },
    ],
    answer: "B",
    explanation:
      "好的元件設計標準：1) 80% 的使用情境開箱即用（合理預設值）；2) 20% 的客製需求有擴充點（不需 fork 整個元件）；3) 加新功能只需加新 props 或子元件，不改現有 API（向後相容）；4) 錯誤用法在 TypeScript 就報錯。props 少不一定好（可能犧牲了彈性），泛型多不一定好（可能過度設計）。",
    tags: ["component-design", "api-design", "dx", "extensibility"],
  },
  {
    id: "fe-026",
    category: "frontend",
    difficulty: "advanced",
    topic: "狀態機進階",
    type: "multiple-choice",
    question:
      "表單精靈（Form Wizard，多步驟表單）的狀態機中，使用者可以前進後退，且每步都有驗證。以下哪個狀態設計最完整？",
    options: [
      { label: "A", value: "step1 | step2 | step3 | completed" },
      { label: "B", value: "step1.idle | step1.validating | step1.error | step2.idle | step2.validating | step2.error | step3.idle | completed" },
      { label: "C", value: "idle | loading | success | error" },
      { label: "D", value: "前進 | 後退 | 提交" },
    ],
    answer: "B",
    explanation:
      "複雜的多步驟流程需要巢狀狀態（Nested States / Hierarchical State Machine）。每個步驟內部有自己的狀態：idle（等待輸入）、validating（驗證中）、error（驗證失敗）。這避免了在父層狀態機中為每個步驟的每個子狀態建立組合，保持狀態機的可讀性。XState 支援 states 的巢狀定義。選項 A 太簡化（沒有驗證狀態）。",
    tags: ["state-machine", "nested-states", "form-wizard", "xstate"],
  },
  {
    id: "fe-027",
    category: "frontend",
    difficulty: "advanced",
    topic: "效能",
    type: "multiple-choice",
    question:
      "使用 CSS transform 做動畫，而不是改變 top/left 值，主要的效能優勢是什麼？",
    options: [
      { label: "A", value: "transform 的計算量比 top/left 更少" },
      { label: "B", value: "transform 由 Compositor Thread 處理，不觸發 Layout 和 Paint，不阻塞 Main Thread" },
      { label: "C", value: "transform 可以讓元素超出父元素的邊界" },
      { label: "D", value: "transform 是 CSS3 新增的功能，瀏覽器特別優化" },
    ],
    answer: "B",
    explanation:
      "瀏覽器渲染管線：Layout → Paint → Composite。改變 top/left 觸發整個管線（Layout → repaint → composite），佔用 Main Thread。transform 只觸發 Composite 階段，由獨立的 Compositor Thread 處理，Main Thread 可以繼續處理 JavaScript，動畫因此更流暢（即使 Main Thread 繁忙）。will-change: transform 提示瀏覽器提前建立獨立 GPU layer。",
    tags: ["performance", "css", "animation", "compositor", "gpu"],
  },
  {
    id: "fe-028",
    category: "frontend",
    difficulty: "advanced",
    topic: "TypeScript 型別",
    type: "fill-blank",
    question:
      "TypeScript 中，要從型別 T 中排除特定 key 並建立新型別，應使用 utility type ___<T, 'keyToRemove'>。",
    answer: "Omit",
    explanation:
      "Omit<T, K> 從型別 T 中移除 K 指定的 key，建立新型別。常用 Utility Types：Pick<T, K>（只保留 K 的 key）、Omit<T, K>（排除 K 的 key）、Partial<T>（所有 key 變 optional）、Required<T>（所有 key 變必填）、Readonly<T>（所有 key 變唯讀）、ReturnType<T>（取得函式回傳型別）。在元件設計中常用：type ButtonProps = Omit<HTMLButtonAttributes, 'onClick'> & { onClick: (event: MyEvent) => void }",
    tags: ["typescript", "utility-types", "Omit", "Pick"],
  },
  {
    id: "fe-029",
    category: "frontend",
    difficulty: "advanced",
    topic: "狀態機進階",
    type: "true-false",
    question:
      "狀態機設計中，副作用（Side Effects，如 API 呼叫、localStorage 寫入）應該放在 transition 函式（reducer）內部執行，讓狀態轉換和副作用同步完成。",
    answer: "false",
    explanation:
      "Reducer 必須是純函式（Pure Function）：相同輸入永遠相同輸出，無副作用。副作用應放在 useEffect（監聽 state 變化觸發）或 XState 的 actions/services（在 transition 定義中宣告，但在 machine 外部執行）。原因：純 reducer 容易測試（不需要 mock API）；副作用與狀態轉換邏輯分離，兩者獨立變更；React Strict Mode 會在開發模式下執行兩次 reducer，若有副作用會出問題。",
    tags: ["state-machine", "side-effects", "pure-function", "reducer"],
  },
  {
    id: "fe-030",
    category: "frontend",
    difficulty: "advanced",
    topic: "元件設計",
    type: "multiple-choice",
    question:
      "實作 Focus Trap（焦點陷阱，用於 Modal 讓 Tab 鍵只在 Modal 內循環）的正確做法是？",
    options: [
      { label: "A", value: "監聽 keydown，如果是 Tab 鍵就 preventDefault，不讓 focus 離開" },
      { label: "B", value: "查找 Modal 內所有 focusable 元素，在最後一個元素按 Tab 時將 focus 移到第一個，在第一個元素按 Shift+Tab 時將 focus 移到最後一個" },
      { label: "C", value: "將 Modal 外的所有元素設為 display: none" },
      { label: "D", value: "使用 tabIndex='-1' 讓 Modal 外的元素無法被 Tab 到" },
    ],
    answer: "B",
    explanation:
      "正確的 Focus Trap：1) 收集 Modal 內所有 focusable 元素（button、input、a、select、textarea、[tabindex]）；2) 監聽 keydown Tab：最後一個元素按 Tab → focus 回第一個；第一個元素按 Shift+Tab → focus 到最後一個；3) Modal 開啟時 focus 到第一個 focusable 元素（或 close button）；4) Modal 關閉時 focus 歸還 trigger。選項 C 會影響螢幕閱讀器；選項 D 不夠，使用者仍可用滑鼠 focus 到外部元素。",
    tags: ["accessibility", "focus-trap", "modal", "keyboard", "a11y"],
  },
];
