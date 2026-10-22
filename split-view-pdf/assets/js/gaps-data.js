window.SVP_GAPS = {
 "stacks": [
  "MuPDF",
  "Poppler",
  "Xpdf",
  "Pdfium",
  "PDFBox",
  "PDF.js",
  "Ghostscript",
  "Adobe Acrobat",
  "PDF Expert",
  "Foxit",
  "PyPDF",
  "PDFMiner",
  "LlamaParse",
  "OpenDataLoader",
  "Docling",
  "Unstructured"
 ],
 "gaps": [
  {
   "id": "EG01",
   "family": "override",
   "construct": "Crafted /ToUnicode CMap in a custom font",
   "conflict": "Rendered glyphs follow the font's visual glyph program; extractors that implement PDF text-extraction semantics typically follow the /ToUnicode mapping",
   "rq1": "xxxxxxooxoxxxxxx",
   "outputs": {
    "MuPDF": "CANARY_EG_001_EXTRACTED17",
    "Poppler": "CANARY_EG_001_EXTRACTED",
    "Xpdf": "CANARY_EG_001_EXTRACTED17",
    "Pdfium": "CANARY_EG_001_EXTRACTED17",
    "PDFBox": "CANARY_EG_001_EXTRACTED",
    "PDF.js": "CANARY_EG_001_EXTRACTED17",
    "Ghostscript": "ReportQZ17",
    "Adobe Acrobat": "ReportQZ17",
    "PDF Expert": "CANARY_EG_001_EXTRACTED17",
    "Foxit": "ReportQZ17"
   },
   "img": "assets/img/eg/EG01.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "Ghostscript"
  },
  {
   "id": "EG02",
   "family": "override",
   "construct": "/ActualText attribute on a marked-content sequence",
   "conflict": "Viewers paint the underlying visible text object; extractors that implement PDF accessibility semantics substitute the /ActualText value, while non-compliant extractors return the content-stream text.",
   "rq1": "xxxxxooooooooooo",
   "outputs": {
    "MuPDF": "CANARY_EG_002_EXTRACTED",
    "Poppler": "CANARY_EG_002_EXTRACTED",
    "Xpdf": "CANARY_EG_002_EXTRACTED",
    "Pdfium": "CANARY_EG_002_EXTRACTED",
    "PDFBox": "CANARY_EG_002_EXTRACTED",
    "PDF.js": "Quarterly results remain stable",
    "Ghostscript": "Quarterly results remain stable",
    "Adobe Acrobat": "Quarterly results remain stable",
    "PDF Expert": "Quarterly results remain stable",
    "Foxit": "Quarterly results remain stable"
   },
   "img": "assets/img/eg/EG02.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "PDF.js"
  },
  {
   "id": "EG03",
   "family": "override",
   "construct": "/ActualText applied at individual character granularity",
   "conflict": "Same authority conflict as EG02 but applied per character; extractors that honor overrides only at whole-span level produce partial overrides, spacing artifacts, or the original visible token.",
   "rq1": "xxxxxooooooooooo",
   "outputs": {
    "MuPDF": "C LA IM",
    "Poppler": "C LA IM",
    "Xpdf": "C LAIM",
    "Pdfium": "C LA IM",
    "PDFBox": "C LA IM",
    "PDF.js": "T R A D E",
    "Ghostscript": "TRADE",
    "Adobe Acrobat": "T RADE",
    "PDF Expert": "T RA DE",
    "Foxit": "T RA D E"
   },
   "img": "assets/img/eg/EG03.webp",
   "imgSize": [
    900,
    178
   ],
   "renderer": "PDF.js"
  },
  {
   "id": "EG04",
   "family": "hidden",
   "construct": "Text rendering mode Tr = 3",
   "conflict": "Text operators are present in the content stream but no glyph is painted; the text rendering mode instructs the renderer to suppress all output.",
   "rq1": "xxxxxxxoxxxxxxxx",
   "outputs": {
    "MuPDF": "Quarterly results remain stable CANARY_EG_004_EXTRACTED",
    "Poppler": "Quarterly results remain stable CANARY_EG_004_EXTRACTED",
    "Xpdf": "Quarterly results remain stable CANARY_EG_004_EXTRACTED",
    "Pdfium": "Quarterly results remain stable CANARY_EG_004_EXTRACTED",
    "PDFBox": "Quarterly results remain stable CANARY_EG_004_EXTRACTED",
    "PDF.js": "Quarterly results remain stable CANARY_EG_004_EXTRACTED",
    "Ghostscript": "Quarterly results remain stable CANARY_EG_004_EXTRACTED",
    "Adobe Acrobat": "Quarterly results remain stable",
    "PDF Expert": "Quarterly results remain stable\nCANARY_EG_004_EXTRACTED",
    "Foxit": "Quarterly results remain stable\nCANARY_EG_004_EXTRACTED"
   },
   "img": "assets/img/eg/EG04.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "Pdfium"
  },
  {
   "id": "EG05",
   "family": "hidden",
   "construct": "White fill color on white background",
   "conflict": "Text is painted but visually disappears against the page background; extractors operate on text objects rather than rendered pixel contrast.",
   "rq1": "xxxxxxxoxxxxxxxx",
   "outputs": {
    "MuPDF": "Quarterly results remain stable CANARY_EG_005_EXTRACTED",
    "Poppler": "Quarterly results remain stable CANARY_EG_005_EXTRACTED",
    "Xpdf": "Quarterly results remain stable CANARY_EG_005_EXTRACTED",
    "Pdfium": "Quarterly results remain stable CANARY_EG_005_EXTRACTED",
    "PDFBox": "Quarterly results remain stable CANARY_EG_005_EXTRACTED",
    "PDF.js": "Quarterly results remain stable CANARY_EG_005_EXTRACTED",
    "Ghostscript": "Quarterly results remain stable CANARY_EG_005_EXTRACTED",
    "Adobe Acrobat": "Quarterly results remain stable",
    "PDF Expert": "Quarterly results remain stable\nCANARY_EG_005_EXTRACTED",
    "Foxit": "Quarterly results remain stable\nCANARY_EG_005_EXTRACTED"
   },
   "img": "assets/img/eg/EG05.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "Pdfium"
  },
  {
   "id": "EG06",
   "family": "hidden",
   "construct": "Off-page geometric positioning",
   "conflict": "Text coordinates place the payload below the visible page box; renderers clip to the page area, but extractors retain text objects regardless of position.",
   "rq1": "oooxxoxoooxxoxox",
   "outputs": {
    "MuPDF": "Quarterly results remain stable",
    "Poppler": "Quarterly results remain stable",
    "Xpdf": "Quarterly results remain stable",
    "Pdfium": "Quarterly results remain stable CANARY_EG_006_EXTRACTED",
    "PDFBox": "Quarterly results remain stable CANARY_EG_006_EXTRACTED",
    "PDF.js": "Quarterly results remain stable",
    "Ghostscript": "Quarterly results remain stable CANARY_EG_006_EXTRACTED",
    "Adobe Acrobat": "Quarterly results remain stable",
    "PDF Expert": "Quarterly results remain stable",
    "Foxit": "Quarterly results remain stable"
   },
   "img": "assets/img/eg/EG06.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "MuPDF"
  },
  {
   "id": "EG07",
   "family": "hidden",
   "construct": "Near-zero font size",
   "conflict": "Glyphs are rendered at a size too small to be readable; extractors decode the underlying character codes without consulting rendered glyph dimensions.",
   "rq1": "xxxxxxxxxxxxooxx",
   "outputs": {
    "MuPDF": "Quarterly results remain stable CANARY_EG_007_EXTRACTED",
    "Poppler": "Quarterly results remain stable CANARY_EG_007_EXTRACTED",
    "Xpdf": "Quarterly results remain stable CANARY_EG_007_EXTRACTED",
    "Pdfium": "Quarterly results remain stable CANARY_EG_007_EXTRACTED",
    "PDFBox": "Quarterly results remain stable CANARY_EG_007_EXTRACTED",
    "PDF.js": "Quarterly results remain stable CANARY_EG_007_EXTRACTED",
    "Ghostscript": "Quarterly results remain stable CANARY_EG_007_EXTRACTED",
    "Adobe Acrobat": "Quarterly results remain stable\nCANARY_EG_007_EXTRACTED",
    "PDF Expert": "Quarterly results remain stable\nCANARY_EG_007_EXTRACTED",
    "Foxit": "Quarterly results remain stable\nCANARY_EG_007_EXTRACTED"
   },
   "img": "assets/img/eg/EG07.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "Pdfium"
  },
  {
   "id": "EG08",
   "family": "hidden",
   "construct": "ExtGState with alpha = 0",
   "conflict": "Text is fully transparent under compositing; many extractors do not treat zero-opacity text as absent.",
   "rq1": "xxxxxxxxxxxxxxxx",
   "outputs": {
    "MuPDF": "Quarterly results remain stable CANARY_EG_008_EXTRACTED",
    "Poppler": "Quarterly results remain stable CANARY_EG_008_EXTRACTED",
    "Xpdf": "Quarterly results remain stable CANARY_EG_008_EXTRACTED",
    "Pdfium": "Quarterly results remain stable CANARY_EG_008_EXTRACTED",
    "PDFBox": "Quarterly results remain stable CANARY_EG_008_EXTRACTED",
    "PDF.js": "Quarterly results remain stable CANARY_EG_008_EXTRACTED",
    "Ghostscript": "Quarterly results remain stable CANARY_EG_008_EXTRACTED",
    "Adobe Acrobat": "Quarterly results remain stable CANARY_EG_008_EXTRACTED",
    "PDF Expert": "Quarterly results remain stable\nCANARY_EG_008_EXTRACTED",
    "Foxit": "Quarterly results remain stable\nCANARY_EG_008_EXTRACTED"
   },
   "img": "assets/img/eg/EG08.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "Pdfium"
  },
  {
   "id": "EG09",
   "family": "hidden",
   "construct": "Active clipping path excludes payload region",
   "conflict": "Payload text is positioned outside the active clip path; rendered output is clipped away while the text operator persists in the stream.",
   "rq1": "oxxxxxxoxxxxxxxx",
   "outputs": {
    "MuPDF": "Quarterly results remain stable",
    "Poppler": "Quarterly results remain stable CANARY_EG_009_EXTRACTED",
    "Xpdf": "Quarterly results remain stable CANARY_EG_009_EXTRACTED",
    "Pdfium": "Quarterly results remain stable CANARY_EG_009_EXTRACTED",
    "PDFBox": "Quarterly results remain stable CANARY_EG_009_EXTRACTED",
    "PDF.js": "Quarterly results remain stable CANARY_EG_009_EXTRACTED",
    "Ghostscript": "Quarterly results remain stable CANARY_EG_009_EXTRACTED",
    "Adobe Acrobat": "Quarterly results remain stable",
    "PDF Expert": "Quarterly results remain stable\nCANARY_EG_009_EXTRACTED",
    "Foxit": "Quarterly results remain stable\nCANARY_EG_009_EXTRACTED"
   },
   "img": "assets/img/eg/EG09.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "MuPDF"
  },
  {
   "id": "EG10",
   "family": "hidden",
   "construct": "Opaque paint operation covers payload text",
   "conflict": "A later drawing operation occludes the payload; the underlying text layer precedes the covering paint in content-stream order and is therefore already decoded by extraction.",
   "rq1": "xxxxxxxoxxxxxxxx",
   "outputs": {
    "MuPDF": "Quarterly results remain stable CANARY_EG_010_EXTRACTED",
    "Poppler": "Quarterly results remain stable CANARY_EG_010_EXTRACTED",
    "Xpdf": "Quarterly results remain stable CANARY_EG_010_EXTRACTED",
    "Pdfium": "Quarterly results remain stable CANARY_EG_010_EXTRACTED",
    "PDFBox": "Quarterly results remain stable CANARY_EG_010_EXTRACTED",
    "PDF.js": "Quarterly results remain stable CANARY_EG_010_EXTRACTED",
    "Ghostscript": "Quarterly results remain stable CANARY_EG_010_EXTRACTED",
    "Adobe Acrobat": "Quarterly results remain stable",
    "PDF Expert": "Quarterly results remain stable\nCANARY_EG_010_EXTRACTED",
    "Foxit": "Quarterly results remain stable\nCANARY_EG_010_EXTRACTED"
   },
   "img": "assets/img/eg/EG10.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "Pdfium"
  },
  {
   "id": "EG11",
   "family": "hidden",
   "construct": "Text rendering mode Tr = 7 (text as clipping geometry)",
   "conflict": "Text is repurposed as a clipping mask rather than as a painted object; some extractors still retain the character codes even though the text has ceased to behave as visible text.",
   "rq1": "xxxxxxxoxxxxxxxx",
   "outputs": {
    "MuPDF": "Quarterly results remain stable CANARY_EG_011_EXTRACTED",
    "Poppler": "Quarterly results remain stable CANARY_EG_011_EXTRACTED",
    "Xpdf": "Quarterly results remain stable CANARY_EG_011_EXTRACTED",
    "Pdfium": "Quarterly results remain stable CANARY_EG_011_EXTRACTED",
    "PDFBox": "Quarterly results remain stable CANARY_EG_011_EXTRACTED",
    "PDF.js": "Quarterly results remain stable CANARY_EG_011_EXTRACTED",
    "Ghostscript": "Quarterly results remain stable CANARY_EG_011_EXTRACTED",
    "Adobe Acrobat": "Quarterly results remain stable",
    "PDF Expert": "Quarterly results remain stable\nCANARY_EG_011_EXTRACTED",
    "Foxit": "Quarterly results remain stable\nCANARY_EG_011_EXTRACTED"
   },
   "img": "assets/img/eg/EG11.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "Pdfium"
  },
  {
   "id": "EG12",
   "family": "hidden",
   "construct": "Zero-height text matrix",
   "conflict": "The text transformation matrix degenerates to zero height; glyph geometry collapses entirely but character decoding survives in many extractors.",
   "rq1": "xxxxxxoxxxxxooxx",
   "outputs": {
    "MuPDF": "Quarterly results remain stable C A N A R Y _ E G _ 0 1 2 _ E X T R A C T E D",
    "Poppler": "Quarterly results remain stable C A N A R Y _ E G _ 0 1 2 _ E X T R A C T E D",
    "Xpdf": "Quarterly results remain stable CANARY_EG_012_EXTRACTED",
    "Pdfium": "Quarterly results remain stable CANARY_EG_012_EXTRACTED",
    "PDFBox": "Quarterly results remain stable CANARY_EG_012_EXTRACTED",
    "PDF.js": "Quarterly results remain stable CANARY_EG_012_EXTRACTED",
    "Ghostscript": "Quarterly results remain stable",
    "Adobe Acrobat": "Quarterly results remain stable\nCANARY_EG_012_EXTRACTED",
    "PDF Expert": "Quarterly results remain stable\nC\nA\nN\nA\nR\nY\n_\nE\nG\n_\n0\n1\n2\n_\nE\nX\nT\nR\nA\nC\nT\nE\nD",
    "Foxit": "Quarterly results remain stable\nCANARY_EG_012_EXTRACTED"
   },
   "img": "assets/img/eg/EG12.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "Ghostscript"
  },
  {
   "id": "EG13",
   "family": "hidden",
   "construct": "Extreme horizontal scaling",
   "conflict": "Horizontal scale is set to a near-zero value; human legibility collapses before extractor semantics do.",
   "rq1": "xxxxxxxxxxxxxxxo",
   "outputs": {
    "MuPDF": "Quarterly results remain stable CANARY_EG_013_EXTRACTED",
    "Poppler": "Quarterly results remain stable CANRY_EG013XTACD",
    "Xpdf": "Quarterly results remain stable CANARY_EG_013_EXTRACTED",
    "Pdfium": "Quarterly results remain stable CANARY_EG_013_EXTRACTED",
    "PDFBox": "Quarterly results remain stable CANARY_EG_013_EXTRACTED",
    "PDF.js": "Quarterly results remain stable CANARY_EG_013_EXTRACTED",
    "Ghostscript": "Quarterly results remain stable CANARY_EG_013_EXTRACTED",
    "Adobe Acrobat": "Quarterly results remain stable CANARY_EG_013_EXTRACTED",
    "PDF Expert": "Quarterly results remain stable\nCANRY_EG013XTACD",
    "Foxit": "Quarterly results remain stable\nCANARY_EG_013_EXTRACTED"
   },
   "img": "assets/img/eg/EG13.webp",
   "imgSize": [
    900,
    265
   ],
   "renderer": "Pdfium"
  },
  {
   "id": "EG14",
   "family": "hidden",
   "construct": "Optional Content Group (OCG) set to OFF",
   "conflict": "The payload layer is declared invisible through the document's layer visibility policy; hiding is policy-based rather than geometric.",
   "rq1": "oooxxxoxxxxxxoxx",
   "outputs": {
    "MuPDF": "Quarterly results remain stable",
    "Poppler": "Quarterly results remain stable",
    "Xpdf": "Quarterly results remain stable",
    "Pdfium": "Quarterly results remain stable CANARY_EG_014_EXTRACTED",
    "PDFBox": "Quarterly results remain stable CANARY_EG_014_EXTRACTED",
    "PDF.js": "Quarterly results remain stable CANARY_EG_014_EXTRACTED",
    "Ghostscript": "Quarterly results remain stable",
    "Adobe Acrobat": "Quarterly results remain stable\nCANARY_EG_014_EXTRACTED",
    "PDF Expert": "Quarterly results remain stable\nCANARY_EG_014_EXTRACTED",
    "Foxit": "Quarterly results remain stable\nCANARY_EG_014_EXTRACTED"
   },
   "img": "assets/img/eg/EG14.webp",
   "imgSize": [
    900,
    162
   ],
   "renderer": "MuPDF"
  },
  {
   "id": "EG15",
   "family": "order",
   "construct": "Minimal token permutation via content-stream reordering",
   "conflict": "A short token sequence is written to the content stream in an order that differs from its spatial left-to-right arrangement; the conflict is between content-stream order and spatial reading order.",
   "rq1": "xoooxxooooxooooo",
   "outputs": {
    "MuPDF": "1 2 6 4 5 3",
    "Poppler": "1 2 3 4 5 6",
    "Xpdf": "123456",
    "Pdfium": "1 2 3 4 5 6",
    "PDFBox": "1 2 64 53",
    "PDF.js": "1 2 6 4 5 3",
    "Ghostscript": "1 2 3 4 5 6",
    "Adobe Acrobat": "123456",
    "PDF Expert": "1 2 3 4 5 6",
    "Foxit": "1 2 3 4 5 6"
   },
   "img": "assets/img/eg/EG15.webp",
   "imgSize": [
    900,
    178
   ],
   "renderer": "Pdfium"
  },
  {
   "id": "EG16",
   "family": "order",
   "construct": "Two-column layout with interleaved content-stream order",
   "conflict": "Text fragments are positioned in a two-column spatial layout but written to the content stream in column-major order; human readers follow row-major left-to-right sequence while some extractors follow the stream.",
   "rq1": "xooxxxoxxoxooxoo",
   "outputs": {
    "MuPDF": "RIVER CANDLE HARBOR STONE MEADOW WINTER",
    "Poppler": "RIVER STONE CANDLE MEADOW HARBOR WINTER",
    "Xpdf": "RIVER STONE CANDLE MEADOW HARBOR WINTER",
    "Pdfium": "RIVER CANDLE HARBOR STONE MEADOW WINTER",
    "PDFBox": "RIVER CANDLE HARBOR STONE MEADOW WINTER",
    "PDF.js": "RIVER CANDLE HARBOR STONE MEADOW WINTER",
    "Ghostscript": "RIVER STONE CANDLE MEADOW HARBOR WINTER",
    "Adobe Acrobat": "RIVER STONE\nCANDLE MEADOW\nHARBOR WINTER",
    "PDF Expert": "RIVER\nCANDLE\nHARBOR\nSTONE\nMEADOW\nWINTER",
    "Foxit": "RIVER STONE\nCANDLE MEADOW\nHARBOR WINTER"
   },
   "img": "assets/img/eg/EG16.webp",
   "imgSize": [
    900,
    485
   ],
   "renderer": "Poppler"
  },
  {
   "id": "EG17",
   "family": "order",
   "construct": "Three-column layout with deeper column-major stream order",
   "conflict": "A more complex three-column variant of EG16; the additional column increases both order ambiguity and parser separability.",
   "rq1": "xooxxxooxoxooxox",
   "outputs": {
    "MuPDF": "ALPHA DELTA GOLF BRAVO ECHO HOTEL CHARLIE FOXTROT INDIA",
    "Poppler": "ALPHA BRAVO CHARLIE DELTA ECHO FOXTROT GOLF HOTEL INDIA",
    "Xpdf": "ALPHA BRAVO CHARLIE DELTA ECHO FOXTROT GOLF HOTEL INDIA",
    "Pdfium": "ALPHA DELTA GOLF BRAVO ECHO HOTEL CHARLIE FOXTROT INDIA",
    "PDFBox": "ALPHA DELTA GOLF BRAVO ECHO HOTEL CHARLIE FOXTROT INDIA",
    "PDF.js": "ALPHA DELTA GOLF BRAVO ECHO HOTEL CHARLIE FOXTROT INDIA",
    "Ghostscript": "ALPHA BRAVO CHARLIE DELTA ECHO FOXTROT GOLF HOTEL INDIA",
    "Adobe Acrobat": "ALPHA BRAVO CHARLIE\nDELTA ECHO FOXTROT\nGOLF HOTEL INDIA",
    "PDF Expert": "ALPHA\nDELTA\nGOLF\nBRAVO\nECHO\nHOTEL\nCHARLIE\nFOXTROT\nINDIA",
    "Foxit": "ALPHA BRAVO CHARLIE\nDELTA ECHO FOXTROT\nGOLF HOTEL INDIA"
   },
   "img": "assets/img/eg/EG17.webp",
   "imgSize": [
    900,
    404
   ],
   "renderer": "Poppler"
  },
  {
   "id": "EG18",
   "family": "font",
   "construct": "Type 3 font without /ToUnicode (3-glyph token)",
   "conflict": "Without /ToUnicode, extractors fall back to glyph-name inference; rendered shapes follow CharProcs, but extracted token is determined by name-based fallback.",
   "rq1": "xx-oooooooxoo-xo",
   "outputs": {
    "MuPDF": "CAB",
    "Poppler": "CAB",
    "Xpdf": "",
    "Pdfium": "ABC",
    "PDFBox": "ABC",
    "PDF.js": "ABC",
    "Ghostscript": "ABC",
    "Adobe Acrobat": "ABC",
    "PDF Expert": "ABC",
    "Foxit": "ABC"
   },
   "img": "assets/img/eg/EG18.webp",
   "imgSize": [
    900,
    355
   ],
   "renderer": "Pdfium"
  },
  {
   "id": "EG19",
   "family": "font",
   "construct": "Type 0 composite font; top-level /Subtype removed",
   "conflict": "Engines differ on how much they infer from remaining composite-font structure; renderers tolerate the missing subtype, extractors diverge.",
   "rq1": "xoooo-oxooooo-xo",
   "outputs": {
    "MuPDF": "呅協䍉",
    "Poppler": "TESTCID",
    "Xpdf": "TESTCID",
    "Pdfium": "TESTCID",
    "PDFBox": "TESTCID",
    "PDF.js": "",
    "Ghostscript": "TESTCID",
    "Adobe Acrobat": {
     "omitted": true
    },
    "PDF Expert": "TESTCID",
    "Foxit": "TESTCID"
   },
   "img": "assets/img/eg/EG19.webp",
   "imgSize": [
    900,
    253
   ],
   "renderer": "Pdfium"
  },
  {
   "id": "EG20",
   "family": "font",
   "construct": "CIDFontType2 descendant; /Subtype removed from descendant",
   "conflict": "Descendant font no longer declares its exact CID subtype; renderers tolerate the missing field, extractors disagree on Unicode recovery.",
   "rq1": "ooox--xxxxoo--xo",
   "outputs": {
    "MuPDF": "TESTCID",
    "Poppler": "TESTCID",
    "Xpdf": "TESTCID",
    "Pdfium": "呅協䍉䐀",
    "PDFBox": null,
    "PDF.js": "",
    "Ghostscript": "呅協䍉D",
    "Adobe Acrobat": {
     "omitted": true
    },
    "PDF Expert": "TESTCID",
    "Foxit": "呅協䍉䐀"
   },
   "img": "assets/img/eg/EG20.webp",
   "imgSize": [
    900,
    242
   ],
   "renderer": "MuPDF"
  },
  {
   "id": "EG21",
   "family": "font",
   "construct": "CIDFontType2 descendant; /FontDescriptor removed",
   "conflict": "Renderers proceed with remaining base-font data; extractors lose a key descriptor and fall back to alternate CID/Unicode interpretation.",
   "rq1": "ox-x-oo-xxxx--xx",
   "outputs": {
    "MuPDF": "REPORT",
    "Poppler": "剅偏剔",
    "Xpdf": "",
    "Pdfium": "剅偏剔",
    "PDFBox": "",
    "PDF.js": "REPORT",
    "Ghostscript": "REPORT",
    "Adobe Acrobat": null,
    "PDF Expert": "剆偐剕",
    "Foxit": "剅偏剔"
   },
   "img": "assets/img/eg/EG21.webp",
   "imgSize": [
    900,
    251
   ],
   "renderer": "MuPDF"
  },
  {
   "id": "EG22",
   "family": "font",
   "construct": "CIDFontType2 descendant; /CIDSystemInfo removed",
   "conflict": "CID registry and ordering metadata absent; renderers recover visible glyphs, extractors diverge in CID-to-Unicode mapping.",
   "rq1": "x-ox-oo-xxxx---x",
   "outputs": {
    "MuPDF": "剅偏剔",
    "Poppler": "",
    "Xpdf": "REPORT",
    "Pdfium": "剅偏剔",
    "PDFBox": "",
    "PDF.js": "剅偏剔",
    "Ghostscript": "REPORT",
    "Adobe Acrobat": null,
    "PDF Expert": "剆偐剕",
    "Foxit": "剅偏剔"
   },
   "img": "assets/img/eg/EG22.webp",
   "imgSize": [
    900,
    251
   ],
   "renderer": "Ghostscript"
  },
  {
   "id": "EG23",
   "family": "font",
   "construct": "CIDFontType2 descendant; /Type removed from descendant object",
   "conflict": "Descendant object no longer declares its role in the composite font stack; renderers reconstruct glyphs from remaining data, extractors reinterpret or remap the bytes.",
   "rq1": "xx-x-oo-xxxx--xx",
   "outputs": {
    "MuPDF": "䵁剋䕔",
    "Poppler": "䵁剋䕔",
    "Xpdf": "",
    "Pdfium": "䵁剋䕔",
    "PDFBox": "",
    "PDF.js": "䵁剋䕔",
    "Ghostscript": "MARKET",
    "Adobe Acrobat": null,
    "PDF Expert": "䵂剌䕕",
    "Foxit": "䵁剋䕔"
   },
   "img": "assets/img/eg/EG23.webp",
   "imgSize": [
    900,
    243
   ],
   "renderer": "Ghostscript"
  },
  {
   "id": "EG24",
   "family": "font",
   "construct": "Type 3 font without /ToUnicode (4-glyph token)",
   "conflict": "Higher-entropy extension of EG18; four-character token increases fingerprint discriminability and is more suitable for short-span QA evaluation.",
   "rq1": "xx-xxxxxxxxxx-xx",
   "outputs": {
    "MuPDF": "ABCD",
    "Poppler": "ABCD",
    "Xpdf": "",
    "Pdfium": "ABCD",
    "PDFBox": "ABCD",
    "PDF.js": "ABCD",
    "Ghostscript": "ABCD",
    "Adobe Acrobat": "ABCD",
    "PDF Expert": "ABCD",
    "Foxit": "ABCD"
   },
   "img": "assets/img/eg/EG24.webp",
   "imgSize": [
    900,
    351
   ],
   "renderer": "Pdfium"
  },
  {
   "id": "EG25",
   "family": "font",
   "construct": "Type 0 font with CIDFontType0 descendant; /DW removed",
   "conflict": "Width-default and CID font metadata incomplete; extractor-side CID handling exposes alternate Unicode or raw (cid:...) markers.",
   "rq1": "ox-x-oo-xxoxo-xx",
   "outputs": {
    "MuPDF": "GRANT",
    "Poppler": "䝒䅎",
    "Xpdf": "",
    "Pdfium": "䝒䅎吀",
    "PDFBox": "",
    "PDF.js": "GRANT",
    "Ghostscript": "GRANT",
    "Adobe Acrobat": null,
    "PDF Expert": "CBA\nArchive code\nremains on public display.",
    "Foxit": "䝒䅎吀"
   },
   "img": "assets/img/eg/EG25.webp",
   "imgSize": [
    900,
    280
   ],
   "renderer": "MuPDF"
  }
 ]
};
