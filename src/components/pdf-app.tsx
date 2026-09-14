import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  AlignCenter, AlignLeft, ArrowDown, ArrowLeft, ArrowRight, Bookmark, Camera,
  Check, CheckCircle2, ChevronDown, ChevronRight, CircleAlert, Copy, Crop,
  Download, Edit3, Eraser, File, FileImage, FilePlus2, Files, FileText, Filter,
  Folder, FolderOpen, Grid2X2, Highlighter, Home, Image, Import, Languages,
  LayoutGrid, List, Maximize2, Menu, Merge, MessageSquare, Minus, Moon, MoreHorizontal,
  Move, PenLine, Plus, Redo2, RotateCw, ScanLine, Search, Settings, Share2,
  SlidersHorizontal, Sparkles, Split, Square, Stamp, Sun, Trash2, Type, Underline,
  Undo2, WandSparkles, X, ZoomIn, ZoomOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type Screen = "home" | "files" | "create" | "tools" | "settings" | "search" | "reader" | "editor" | "organize" | "flow" | "scanner" | "appearance" | "empty";
type Sheet = "import" | "file" | "page" | "thumbnails" | "text" | "annotation" | "error" | null;
type FlowKind = "Merge PDFs" | "Split PDF" | "PDF to Word" | "Word to PDF" | "PDF to Images" | "Images to PDF" | "Compress PDF";

const docs = [
  { name: "University Notes.pdf", pages: 248, size: "18.2 MB", time: "12 min ago", tone: "teal", progress: 62 },
  { name: "Invoice September.pdf", pages: 4, size: "640 KB", time: "2 hr ago", tone: "coral", progress: 0 },
  { name: "Project Proposal.pdf", pages: 18, size: "2.1 MB", time: "Yesterday", tone: "gold", progress: 0 },
  { name: "Chapter 12.pdf", pages: 32, size: "1.4 MB", time: "Tuesday", tone: "teal", progress: 28 },
  { name: "Contract.pdf", pages: 9, size: "940 KB", time: "Monday", tone: "coral", progress: 0 },
];

const categories = [
  { title: "Convert", tools: ["PDF to Word", "Word to PDF", "PDF to Images", "Images to PDF"] },
  { title: "Organize", tools: ["Merge PDFs", "Split PDF", "Reorder pages", "Rotate pages", "Delete pages", "Extract pages"] },
  { title: "Edit", tools: ["Edit PDF", "Annotate", "Sign", "Fill forms"] },
  { title: "Optimize", tools: ["Compress PDF", "Optimize document"] },
];

function IconButton({ label, children, onClick, active = false }: { label: string; children: ReactNode; onClick?: () => void; active?: boolean }) {
  return <Button aria-label={label} title={label} variant="ghost" size="icon" onClick={onClick} className={cn("h-11 w-11 rounded-xl", active && "bg-primary-soft text-primary")}>{children}</Button>;
}

function TopBar({ title, subtitle, back, actions }: { title: string; subtitle?: string; back?: () => void; actions?: ReactNode }) {
  return <header className="sticky top-0 z-30 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 border-b border-border bg-background/92 px-3 py-2 backdrop-blur-xl">
    {back ? <IconButton label="Go back" onClick={back}><ArrowLeft /></IconButton> : <div className="brand-mark">S</div>}
    <div className="min-w-0"><h1 className="truncate text-[17px] font-bold">{title}</h1>{subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}</div>
    <div className="flex shrink-0 items-center">{actions}</div>
  </header>;
}

function SearchBar({ onClick, value, onChange }: { onClick?: () => void; value?: string; onChange?: (v: string) => void }) {
  return <label className="search-bar"><Search className="size-5 shrink-0" /><input aria-label="Search documents and tools" value={value} onChange={(e) => onChange?.(e.target.value)} onFocus={onClick} placeholder="Search documents and tools" /><SlidersHorizontal className="size-5 shrink-0" /></label>;
}

function FileThumb({ tone = "teal", selected = false }: { tone?: string; selected?: boolean }) {
  return <div className={cn("file-thumb", `thumb-${tone}`, selected && "ring-2 ring-primary")}><div className="doc-lines"><i /><i /><i /><i /></div><span>PDF</span>{selected && <b><Check /></b>}</div>;
}

function FileRow({ doc, onOpen, onMore }: { doc: typeof docs[number]; onOpen: () => void; onMore: () => void }) {
  return <div className="file-row"><button className="flex min-w-0 flex-1 items-center gap-3 text-left" onClick={onOpen}><FileThumb tone={doc.tone} /><span className="min-w-0 flex-1"><strong className="block truncate text-sm">{doc.name}</strong><small className="mt-1 block text-xs text-muted-foreground">{doc.pages} pages · {doc.size} · {doc.time}</small></span></button><IconButton label={`Actions for ${doc.name}`} onClick={onMore}><MoreHorizontal /></IconButton></div>;
}

function ToolIcon({ name }: { name: string }) {
  const C = name.includes("Compress") || name.includes("Optimize") ? Minus : name.includes("Merge") ? Merge : name.includes("Split") ? Split : name.includes("Image") ? FileImage : name.includes("Sign") ? PenLine : name.includes("Edit") || name.includes("Annotate") ? Edit3 : name.includes("Rotate") ? RotateCw : name.includes("Delete") ? Trash2 : name.includes("Extract") ? Download : name.includes("Reorder") ? Move : FileText;
  return <C />;
}

function HomeScreen({ go, openImport, openDoc }: { go: (s: Screen) => void; openImport: () => void; openDoc: () => void }) {
  return <>
    <div className="px-5 pb-7 pt-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><div className="min-w-0"><p className="eyebrow">SLATE PDF</p><h1 className="mt-1 truncate text-2xl font-bold">Good afternoon, Maya</h1></div><button className="avatar" aria-label="Profile">MK</button></div>
      <div className="mt-5"><SearchBar onClick={() => go("search")} /></div>
    </div>
    <main className="space-y-7 px-5 pb-32">
      <section><div className="section-heading"><h2>Continue reading</h2><button onClick={() => go("files")}>View all</button></div><button className="continue-card" onClick={openDoc}><FileThumb /><span className="min-w-0 flex-1 text-left"><strong className="block truncate">University Notes.pdf</strong><small className="text-muted-foreground">Page 154 of 248</small><span className="progress-track mt-3"><i style={{ width: "62%" }} /></span><small className="mt-2 flex justify-between"><span>62% complete</span><b className="text-primary">Resume</b></small></span><ChevronRight className="size-5 text-muted-foreground" /></button></section>
      <section><div className="section-heading"><h2>Quick actions</h2></div><div className="quick-grid"><button onClick={() => go("scanner")}><span><ScanLine /></span><b>Scan</b><small>Camera to PDF</small></button><button onClick={() => { go("flow"); }}><span><Minus /></span><b>Compress</b><small>Shrink file size</small></button><button onClick={() => go("flow")}><span><Merge /></span><b>Merge</b><small>Combine PDFs</small></button><button onClick={openImport}><span><Import /></span><b>Import</b><small>From your phone</small></button></div></section>
      <section><div className="section-heading"><h2>Popular tools</h2><button onClick={() => go("tools")}>All tools</button></div><div className="tool-strip">{["Edit PDF","PDF to Word","Sign","Split PDF"].map((x) => <button key={x} onClick={() => x === "Edit PDF" ? go("editor") : go("flow")}><span><ToolIcon name={x} /></span><b>{x}</b></button>)}</div></section>
      <section><div className="section-heading"><h2>Recent files</h2><button onClick={() => go("files")}>Browse</button></div><div className="file-list">{docs.slice(1,4).map((d) => <FileRow key={d.name} doc={d} onOpen={openDoc} onMore={() => {}} />)}</div></section>
    </main>
    <Button onClick={openImport} className="floating-create"><Plus /> Create or import</Button>
  </>;
}

function FilesScreen({ openDoc, setSheet, go }: { openDoc: () => void; setSheet: (s: Sheet) => void; go: (s: Screen) => void }) {
  const [grid, setGrid] = useState(false); const [tab, setTab] = useState("Recent");
  return <><TopBar title="Files" actions={<IconButton label="Search files" onClick={() => go("search")}><Search /></IconButton>} /><main className="px-5 pb-28 pt-4"><div className="scroll-tabs">{["Recent","PDFs","Images","Documents","Folders"].map(t => <button className={tab === t ? "active" : ""} onClick={() => setTab(t)} key={t}>{t}</button>)}</div><div className="mt-4 flex items-center justify-between"><button className="control-chip"><Filter /> Modified <ChevronDown /></button><div className="segmented"><IconButton label="List view" active={!grid} onClick={() => setGrid(false)}><List /></IconButton><IconButton label="Grid view" active={grid} onClick={() => setGrid(true)}><Grid2X2 /></IconButton></div></div>{tab === "Folders" ? <EmptyState icon={<FolderOpen />} title="No folders yet" text="Create folders to keep related documents together." action="Create folder" /> : grid ? <div className="file-grid">{docs.map(d => <button key={d.name} onClick={openDoc}><FileThumb tone={d.tone} /><strong>{d.name}</strong><small>{d.pages} pages · {d.size}</small></button>)}</div> : <div className="file-list mt-4">{docs.map(d => <FileRow key={d.name} doc={d} onOpen={openDoc} onMore={() => setSheet("file")} />)}</div>}</main></>;
}

function SearchScreen({ back, openDoc }: { back: () => void; openDoc: () => void }) {
  const [q,setQ]=useState(""); const results=docs.filter(d=>d.name.toLowerCase().includes(q.toLowerCase()));
  return <><TopBar title="Search" back={back} /><main className="px-5 pt-4"><SearchBar value={q} onChange={setQ} /><div className="mt-5 flex items-center justify-between"><h2 className="text-sm font-bold">{q ? `${results.length} results` : "Recent searches"}</h2>{!q && <button className="text-xs text-primary">Clear</button>}</div>{q && results.length === 0 ? <EmptyState icon={<Search />} title="No results" text={`We couldn't find anything matching “${q}”.`} action="Clear search" onAction={() => setQ("")} /> : <div className="file-list mt-3">{results.map(d=><FileRow key={d.name} doc={d} onOpen={openDoc} onMore={()=>{}} />)}</div>}</main></>;
}

function ReaderScreen({ back, go, sheet }: { back: () => void; go: (s: Screen) => void; sheet: (s: Sheet) => void }) {
  const [controls,setControls]=useState(true); const [bookmarked,setBookmarked]=useState(false); const [zoom,setZoom]=useState(100);
  return <div className="reader-screen"><div className={cn("reader-top", !controls && "reader-hidden")}><IconButton label="Back" onClick={back}><ArrowLeft /></IconButton><div className="min-w-0 flex-1"><b className="block truncate text-sm">University Notes.pdf</b><small>Page 154 of 248</small></div><IconButton label="Search in document"><Search /></IconButton><IconButton label="Bookmark page" active={bookmarked} onClick={()=>setBookmarked(!bookmarked)}><Bookmark /></IconButton><IconButton label="More options" onClick={()=>sheet("file")}><MoreHorizontal /></IconButton></div><button aria-label="Toggle reader controls" className="document-stage" onClick={()=>setControls(!controls)}><div className="pdf-page" style={{transform:`scale(${zoom/100})`}}><p className="pdf-kicker">SOCIAL SCIENCE · FALL TERM</p><h2>Methods of inquiry</h2><p>Research design connects a question to evidence. A useful method makes assumptions visible and creates a repeatable path from observation to conclusion.</p><h3>12.4 Field interviews</h3><p>Interview practice begins with careful listening. Open questions create room for detail while structured notes preserve context for later analysis.</p><blockquote>Good evidence is not simply collected. It is interpreted within a transparent method.</blockquote><p>Researchers compare sources, identify contradictions, and record the decisions that shape each conclusion.</p><span className="page-no">154</span></div></button><div className={cn("reader-bottom", !controls && "reader-hidden")}><div className="page-pill">154 / 248</div><div className="reader-tools"><IconButton label="Zoom out" onClick={()=>setZoom(Math.max(80,zoom-10))}><ZoomOut /></IconButton><span className="w-12 text-center text-xs font-bold">{zoom}%</span><IconButton label="Zoom in" onClick={()=>setZoom(Math.min(130,zoom+10))}><ZoomIn /></IconButton><IconButton label="Page thumbnails" onClick={()=>sheet("thumbnails")}><LayoutGrid /></IconButton><IconButton label="Share"><Share2 /></IconButton><Button className="h-11 rounded-xl" onClick={()=>go("editor")}><Edit3 /> Edit</Button></div></div></div>;
}

const editorTools = ["Select","Text","Highlight","Underline","Strike","Draw","Eraser","Shapes","Image","Signature","Comment"];
function EditorScreen({ back, sheet }: { back: () => void; sheet: (s: Sheet) => void }) {
  const [tool,setTool]=useState("Select");
  return <div className="editor-screen"><TopBar title="University Notes.pdf" subtitle="Editing" back={back} actions={<><IconButton label="Undo"><Undo2 /></IconButton><IconButton label="Redo"><Redo2 /></IconButton><Button size="sm" className="ml-1 h-10 rounded-xl">Save</Button></>} /><div className="editor-canvas"><div className="pdf-page"><p className="pdf-kicker">SOCIAL SCIENCE · FALL TERM</p><h2>Methods of inquiry</h2><div className="selected-text"><p>Research design connects a question to evidence. A useful method makes assumptions visible.</p><span className="handle start" /><span className="handle end" /></div><p>Interview practice begins with careful listening and precise note-taking.</p><div className="annotation-note"><MessageSquare /> Strong argument—add a source.</div><span className="page-no">154</span></div></div><div className="editor-tray"><div className="tool-scroller">{editorTools.map(t=><button key={t} className={tool===t?"active":""} onClick={()=>{setTool(t); if(t==="Text") sheet("text"); if(["Highlight","Underline","Strike","Draw"].includes(t)) sheet("annotation");}}><ToolIcon name={t}/><span>{t}</span></button>)}</div></div></div>;
}

function OrganizerScreen({ back, sheet }: { back: () => void; sheet: (s: Sheet) => void }) {
  const [selected,setSelected]=useState<number[]>([2,3,6]); const toggle=(n:number)=>setSelected(s=>s.includes(n)?s.filter(x=>x!==n):[...s,n]);
  return <><TopBar title="Organize pages" subtitle="248 pages" back={back} actions={<IconButton label="More page actions" onClick={()=>sheet("page")}><MoreHorizontal /></IconButton>} /><main className="px-4 pb-28 pt-4"><div className="organizer-head"><button>Select all</button><span>Hold and drag to reorder</span></div><div className="page-grid">{Array.from({length:8},(_,i)=>i+1).map(n=><button key={n} onClick={()=>toggle(n)}><div className={cn("mini-page",selected.includes(n)&&"selected")}><div className="doc-lines"><i/><i/><i/><i/><i/></div>{selected.includes(n)&&<span><Check /></span>}</div><small>Page {n}</small><Move /></button>)}</div></main>{selected.length>0&&<div className="selection-bar"><strong>{selected.length} pages selected</strong><div><button><Download/>Extract</button><button><RotateCw/>Rotate</button><button><Copy/>Duplicate</button><button className="danger"><Trash2/>Delete</button></div></div>}</>;
}

function ToolsScreen({ startFlow, go }: { startFlow:(f:FlowKind)=>void; go:(s:Screen)=>void }) {
  return <><TopBar title="PDF tools" subtitle="Everything for your documents" /><main className="space-y-7 px-5 pb-28 pt-5">{categories.map(cat=><section key={cat.title}><div className="section-heading"><h2>{cat.title}</h2></div><div className="tools-grid">{cat.tools.map(t=><button key={t} onClick={()=> t==="Edit PDF"||t==="Annotate"?go("editor"):t==="Reorder pages"||t==="Rotate pages"||t==="Delete pages"||t==="Extract pages"?go("organize"):startFlow((t==="Optimize document"?"Compress PDF":t) as FlowKind)}><span><ToolIcon name={t}/></span><b>{t}</b><ChevronRight/></button>)}</div></section>)}</main></>;
}

function FlowScreen({ kind, back }: { kind:FlowKind; back:()=>void }) {
  const [step,setStep]=useState<"setup"|"processing"|"done">("setup"); const [level,setLevel]=useState([52]);
  useEffect(()=>{if(step==="processing"){const t=setTimeout(()=>setStep("done"),1500);return()=>clearTimeout(t)}},[step]);
  const isCompress=kind==="Compress PDF", isSplit=kind==="Split PDF", isMerge=kind==="Merge PDFs";
  return <><TopBar title={kind} back={back} />{step==="setup"?<main className="flow-page"><div className="flow-symbol"><FileText/><ArrowDown/><span><ToolIcon name={kind}/></span></div><h2>{isCompress?"Make your PDF lighter":isMerge?"Combine documents":isSplit?"Choose how to split":"Ready to convert"}</h2><p>{isCompress?"Reduce file size while keeping text and images clear.":isMerge?"Drag files to set the final page order.":isSplit?"Preview the pages before creating new files.":"Your document stays private while it is prepared."}</p><div className="selected-file"><FileThumb/><span><b>{kind==="Word to PDF"?"Project brief.docx":"University Notes.pdf"}</b><small>{isCompress?"248 pages · 12.4 MB":"248 pages · Ready"}</small></span><CheckCircle2/></div>{isCompress&&<div className="setting-panel"><div className="flex justify-between"><b>Compression level</b><span className="text-primary">Balanced</span></div><Slider value={level} onValueChange={setLevel} min={10} max={90} step={1}/><div className="flex justify-between text-xs text-muted-foreground"><span>Higher quality</span><span>Smaller size</span></div><div className="size-result"><span>12.4 MB<small>Original</small></span><ArrowRight/><span>4.8 MB<small>Estimated</small></span></div></div>}{isSplit&&<div className="setting-panel"><b>Split method</b>{["Page ranges","Select pages","Every N pages"].map((x,i)=><label className="radio-row" key={x}><span><strong>{x}</strong><small>{i===0?"1–4, 8–12":i===1?"Pick from thumbnails":"Create equal groups"}</small></span><input type="radio" name="split" defaultChecked={i===0}/></label>)}</div>}{isMerge&&<div className="merge-list">{docs.slice(0,3).map((d,i)=><div key={d.name}><Move/><FileThumb tone={d.tone}/><span><b>{d.name}</b><small>{d.pages} pages</small></span><IconButton label="Remove file"><X/></IconButton></div>)}<Button variant="outline" className="h-12 rounded-xl"><Plus/>Add another PDF</Button></div>}<Button className="mt-auto h-14 w-full rounded-2xl text-base" onClick={()=>setStep("processing")}>{isCompress?"Compress PDF":isMerge?"Merge 3 PDFs":isSplit?"Split PDF":`Convert to ${kind.split(" to ")[1]}`}</Button></main>:step==="processing"?<StateScreen icon={<Sparkles/>} title={isCompress?"Optimizing document…":"Preparing your PDF…"} text="Almost done…" progress />:<StateScreen icon={<Check/>} title={isCompress?"PDF compressed successfully":"Your file is ready"} text={isCompress?"You saved 7.6 MB (61%)":"The new document is ready to open or share."} stats={isCompress} actions={<><Button className="h-12 flex-1 rounded-xl">Open</Button><Button variant="outline" className="h-12 flex-1 rounded-xl"><Share2/>Share</Button><Button variant="ghost" className="h-12 w-full rounded-xl" onClick={back}>Done</Button></>} />}</>;
}

function ScannerScreen({ back }: { back:()=>void }) {
  const [captured,setCaptured]=useState(false);
  return captured?<><TopBar title="Review scan" subtitle="1 page" back={()=>setCaptured(false)} actions={<Button className="h-10 rounded-xl">Save PDF</Button>} /><main className="scan-review"><div className="scanned-page"><div className="doc-lines"><i/><i/><i/><i/><i/><i/><i/></div></div><div className="scan-tools">{[[Crop,"Crop"],[RotateCw,"Rotate"],[WandSparkles,"Enhance"],[Plus,"Add page"],[Move,"Reorder"]].map(([C,n])=><button key={String(n)}><C/><span>{String(n)}</span></button>)}</div></main></>:<div className="camera-screen"><div className="camera-top"><IconButton label="Close scanner" onClick={back}><X/></IconButton><b>Scan document</b><IconButton label="Flash"><Sparkles/></IconButton></div><div className="camera-copy"><span>Document detected</span><p>Hold steady—capturing edges automatically</p></div><div className="scan-boundary"><i/><i/><i/><i/><div className="fake-paper"><div className="doc-lines"><i/><i/><i/><i/><i/></div></div></div><div className="camera-controls"><button><Image/><span>Gallery</span></button><button className="shutter" aria-label="Capture page" onClick={()=>setCaptured(true)}><i/></button><button><ScanLine/><span>Auto</span></button></div></div>;
}

function SettingsScreen({ go, theme, setTheme }: { go:(s:Screen)=>void; theme:string; setTheme:(s:string)=>void }) {
  return <><TopBar title="Settings" /><main className="px-5 pb-28 pt-5"><div className="profile-block"><div className="avatar">MK</div><span><b>Maya Kim</b><small>Local workspace · 14 documents</small></span></div><SettingsGroup title="Preferences" items={[{icon:<Sun/>,label:"Appearance",value:theme,onClick:()=>go("appearance")},{icon:<FileText/>,label:"Default PDF viewer",value:"Vertical scroll"},{icon:<Download/>,label:"Storage",value:"184 MB used"},{icon:<Languages/>,label:"Language",value:"English"}]} /><SettingsGroup title="App" items={[{icon:<Bookmark/>,label:"Notifications",toggle:true},{icon:<Settings/>,label:"Privacy",value:"On-device processing"},{icon:<CircleAlert/>,label:"About",value:"Version 1.0"},{icon:<LayoutGrid/>,label:"Empty state gallery",onClick:()=>go("empty")}]} /></main></>;
}

function SettingsGroup({ title, items }: { title:string; items:{icon:ReactNode;label:string;value?:string;toggle?:boolean;onClick?:()=>void}[] }) { return <section className="settings-group"><h2>{title}</h2><div>{items.map(i=><button key={i.label} onClick={i.onClick}><span className="setting-icon">{i.icon}</span><b>{i.label}</b>{i.toggle?<Switch defaultChecked/>:<><small>{i.value}</small><ChevronRight/></>}</button>)}</div></section> }

function AppearanceScreen({ back, theme, setTheme }:{back:()=>void;theme:string;setTheme:(s:string)=>void}) { return <><TopBar title="Appearance" back={back}/><main className="px-5 pt-5"><h2 className="text-sm font-bold">Color theme</h2><div className="theme-options">{[["light",Sun,"Light"],["dark",Moon,"Dark"],["system",Settings,"System"]].map(([id,C,label])=><button key={String(id)} className={theme===id?"active":""} onClick={()=>setTheme(String(id))}><C/><span><b>{String(label)}</b><small>{id==="system"?"Match device settings":`${label} surfaces and document contrast`}</small></span>{theme===id&&<Check/>}</button>)}</div><h2 className="mt-7 text-sm font-bold">Reading preview</h2><div className="theme-preview"><div className="pdf-page"><h2>Clear reading</h2><p>Comfortable contrast keeps every document easy to read.</p></div></div></main></> }

function EmptyGallery({back}:{back:()=>void}) { return <><TopBar title="Empty states" back={back}/><main className="px-5 pb-12"><EmptyState icon={<FilePlus2/>} title="No documents yet" text="Import a PDF, scan a page, or create a blank document." action="Import a file"/><EmptyState icon={<Bookmark/>} title="No bookmarks" text="Bookmark important pages while reading to find them here." action="Open a document"/><EmptyState icon={<Folder/>} title="No folders" text="Group projects and related files into folders." action="New folder"/></main></> }

function StateScreen({icon,title,text,progress,stats,actions}:{icon:ReactNode;title:string;text:string;progress?:boolean;stats?:boolean;actions?:ReactNode}) { return <main className="state-page"><div className={cn("state-icon",stats&&"success")}>{icon}</div><h2>{title}</h2><p>{text}</p>{progress&&<><div className="processing-ring"><span>78%</span></div><small>Securing your changes</small></>}{stats&&<div className="result-stats"><span><small>Original</small><b>12.4 MB</b></span><span><small>New</small><b>4.8 MB</b></span><span><small>Saved</small><b>61%</b></span></div>}{actions&&<div className="state-actions">{actions}</div>}</main> }

function EmptyState({icon,title,text,action,onAction}:{icon:ReactNode;title:string;text:string;action:string;onAction?:()=>void}) { return <div className="empty-state"><span>{icon}</span><h3>{title}</h3><p>{text}</p><Button variant="outline" onClick={onAction} className="h-11 rounded-xl">{action}</Button></div> }

function BottomNav({screen,go,create}:{screen:Screen;go:(s:Screen)=>void;create:()=>void}) { const items:[[Screen,string,ReactNode],[Screen,string,ReactNode],[("create"),string,ReactNode],[Screen,string,ReactNode],[Screen,string,ReactNode]]=[["home","Home",<Home/>],["files","Files",<Files/>],["create","Create",<Plus/>],["tools","Tools",<LayoutGrid/>],["settings","Settings",<Settings/>]];return <nav className="bottom-nav">{items.map(([s,l,i])=><button aria-label={l} key={s} className={cn(screen===s&&"active",s==="create"&&"create-nav")} onClick={()=>s==="create"?create():go(s)}>{i}<span>{l}</span></button>)}</nav> }

function BottomSheet({sheet,close,go}:{sheet:Sheet;close:()=>void;go:(s:Screen)=>void}) { if(!sheet)return null; let body:ReactNode;
  if(sheet==="import") body=<><SheetTitle title="Create or import" subtitle="Start with a file, photo, or camera"/><div className="sheet-grid">{[[Files,"Files"],[Image,"Photos"],[Camera,"Camera / scan"],[FileText,"Blank document"]].map(([C,n])=><button key={String(n)} onClick={()=>{if(n==="Camera / scan")go("scanner");close()}}><C/><b>{String(n)}</b></button>)}</div><h3 className="sheet-label">RECENT DOCUMENTS</h3><button className="sheet-file"><FileThumb/><span><b>Project Proposal.pdf</b><small>Yesterday · 2.1 MB</small></span><ChevronRight/></button></>;
  else if(sheet==="file") body=<><SheetTitle title="University Notes.pdf" subtitle="248 pages · 18.2 MB"/><div className="action-list">{[[Share2,"Share"],[Edit3,"Rename"],[Copy,"Duplicate"],[Move,"Move to folder"],[Download,"Export"],[Trash2,"Delete"]].map(([C,n])=><button className={n==="Delete"?"danger":""} key={String(n)}><C/><span>{String(n)}</span><ChevronRight/></button>)}</div></>;
  else if(sheet==="page") body=<><SheetTitle title="Page actions" subtitle="Page 154"/><div className="action-list">{[[RotateCw,"Rotate"],[Copy,"Duplicate"],[Download,"Extract"],[Plus,"Insert after"],[Share2,"Share page"],[Trash2,"Delete page"]].map(([C,n])=><button className={n==="Delete page"?"danger":""} key={String(n)}><C/><span>{String(n)}</span><ChevronRight/></button>)}</div></>;
  else if(sheet==="thumbnails") body=<><SheetTitle title="Pages" subtitle="Tap a page to jump"/><div className="thumb-sheet-grid">{Array.from({length:6},(_,i)=>i+152).map(n=><button key={n}><div className={cn("mini-page",n===154&&"selected")}><div className="doc-lines"><i/><i/><i/></div></div><small>{n}</small></button>)}</div><Button className="mt-5 h-12 w-full rounded-xl" onClick={()=>{close();go("organize")}}>Organize pages</Button></>;
  else if(sheet==="text") body=<><SheetTitle title="Edit text" subtitle="Aptos · 16 pt"/><div className="format-toolbar"><button><b>B</b></button><button><i>I</i></button><button><Underline/></button><button><AlignLeft/></button><button><AlignCenter/></button><button><span className="color-dot"/></button></div><div className="setting-panel mt-4"><label>Font size <b>16</b></label><Slider defaultValue={[40]}/></div><div className="grid grid-cols-2 gap-3 pt-4"><Button variant="outline" className="h-12 rounded-xl"><Copy/>Copy</Button><Button variant="destructive" className="h-12 rounded-xl"><Trash2/>Delete</Button></div></>;
  else if(sheet==="annotation") body=<><SheetTitle title="Annotation style" subtitle="Highlight"/><div className="swatches">{["swatch-yellow","swatch-teal","swatch-coral","swatch-blue","swatch-ink"].map(x=><button aria-label={x} key={x} className={x}/>)}</div><div className="setting-panel mt-4"><div className="flex justify-between"><b>Opacity</b><span>70%</span></div><Slider defaultValue={[70]}/></div></>;
  else body=<><div className="error-symbol"><CircleAlert/></div><SheetTitle title="This PDF can’t be opened" subtitle="The file appears to be damaged or incomplete."/><Button className="mt-5 h-12 w-full rounded-xl">Choose another file</Button><Button variant="ghost" className="mt-2 h-12 w-full rounded-xl" onClick={close}>Cancel</Button></>;
  return <div className="sheet-layer" onClick={close}><section className="bottom-sheet" onClick={e=>e.stopPropagation()}><div className="sheet-handle"/>{body}</section></div> }
function SheetTitle({title,subtitle}:{title:string;subtitle:string}) {return <div className="sheet-title"><h2>{title}</h2><p>{subtitle}</p></div>}

export function PdfApp() {
  const [screen,setScreen]=useState<Screen>("home"),[history,setHistory]=useState<Screen[]>([]),[sheet,setSheet]=useState<Sheet>(null),[theme,setTheme]=useState("light"),[flow,setFlow]=useState<FlowKind>("Compress PDF");
  const go=(next:Screen)=>{setHistory(h=>[...h,screen]);setScreen(next);window.scrollTo({top:0,behavior:"smooth"})}; const back=()=>{const h=[...history];setScreen(h.pop()??"home");setHistory(h)}; const startFlow=(f:FlowKind)=>{setFlow(f);go("flow")};
  useEffect(()=>{document.documentElement.classList.toggle("dark",theme==="dark")},[theme]);
  const body=useMemo(()=>{switch(screen){case"home":return <HomeScreen go={go} openImport={()=>setSheet("import")} openDoc={()=>go("reader")}/>;case"files":return <FilesScreen openDoc={()=>go("reader")} setSheet={setSheet} go={go}/>;case"search":return <SearchScreen back={back} openDoc={()=>go("reader")}/>;case"reader":return <ReaderScreen back={back} go={go} sheet={setSheet}/>;case"editor":return <EditorScreen back={back} sheet={setSheet}/>;case"organize":return <OrganizerScreen back={back} sheet={setSheet}/>;case"tools":return <ToolsScreen startFlow={startFlow} go={go}/>;case"flow":return <FlowScreen kind={flow} back={back}/>;case"scanner":return <ScannerScreen back={back}/>;case"settings":return <SettingsScreen go={go} theme={theme} setTheme={setTheme}/>;case"appearance":return <AppearanceScreen back={back} theme={theme} setTheme={setTheme}/>;case"empty":return <EmptyGallery back={back}/>;default:return <HomeScreen go={go} openImport={()=>setSheet("import")} openDoc={()=>go("reader")}/>}},[screen,history,theme,flow,sheet]);
  const nav=["home","files","tools","settings"].includes(screen);
  return <div className="app-background"><div className="phone-shell"><div className="safe-top"/><div className="screen-content">{body}</div>{nav&&<BottomNav screen={screen} go={go} create={()=>setSheet("import")}/>}<BottomSheet sheet={sheet} close={()=>setSheet(null)} go={go}/></div></div>;
}