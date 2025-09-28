from typing import List
from collections import Counter
from backend.app.models.schemas import Paragraph
import re

# 中文分詞
import jieba
# 英文停用詞
from nltk.corpus import stopwords

EN_STOP = set()
try:
    EN_STOP = set(stopwords.words('english'))
except Exception:
    EN_STOP = {
    # 基本冠詞/代名詞/助動詞/連接詞/介系詞
    "the","a","an","of","to","in","and","is","are","for","on","with","as","by","this","that",
    "be","or","it","from","at","than","into","about","can","will","not","no","yes","we","you",
    "your","our","their","they","them","its","these","those","more","most","such","via","per",
    "i","me","my","mine","myself","ours","ourselves","yourself","yourselves","him","his",
    "himself","her","hers","herself","itself","themselves","who","whom","whose","which","what",
    "when","where","why","how","any","anyone","anything","anywhere","some","someone","something",
    "somewhere","none","nothing","nowhere","both","each","either","neither","another","other",
    "others","all","few","many","much","several","most","more","less","least","enough","own",
    "do","does","did","doing","done","am","is","are","was","were","been","being","have","has",
    "had","having","would","should","could","might","must","shall","may","also","too","very",
    "just","only","even","ever","never","always","often","sometimes","usually","already","still",
    "yet","again","though","although","however","therefore","hence","thus","meanwhile","besides",
    "further","furthermore","moreover","otherwise","instead","because","since","so","if","then",
    "unless","until","while","whereas","whether","each","every","either","neither","between",
    "among","across","through","throughout","within","without","under","over","above","below",
    "before","after","around","near","beyond","against","toward","towards","upon","off","out",
    "up","down","back","forth","away","here","there","therein","thereof","herein","hereof",
    "please","etc","eg","ie","vs","ok","okay",
    # 文字雜訊/常見代稱
    "s","t","ll","re","ve","d","m","o","u","rt","nt",
}

ZH_STOP = {
    # 常見虛詞/助詞/語氣詞
    "的","了","在","是","和","及","與","並","也","就","還","而","被","把","於","對","由","等","或","及其",
    "之","其","各","每","與否","之一","其中","此外","另外","因為","所以","因此","然而","但是","如果","則",
    "而且","並且","或者","以及","即","即使","雖然","然而","且","乃","亦","嘛","嗎","呢","啊","哦","呀",
    "吧","著","啦","囉","喔","咧","嘍","乎","者","而已","罷了","而後","然後","此前","此後","以後","以前",
    # 指代/量詞/時間詞
    "這","這些","這個","那","那些","那個","哪","哪些","哪個","某","某些","自己","本身","彼此","有人","大家",
    "我們","你們","他們","它們","她們","我","你","他","她","它","其餘","任何","全部","全部的","一些","一些的",
    "很多","許多","多數","少數","較多","較少","更少","最少","最多","唯一","以上","以下","以內","以外","之前",
    "之後","目前","當前","如今","現在","今天","昨日","明天","剛剛","剛才","稍後","稍微","大多","大部分","部分",
    # 介詞/結構助詞
    "把","被","給","向","從","往","至","至於","至今","對於","關於","針對","依據","根據","依据","按照","依照",
    "例如","比如","比方","此外","除了","除外",
    # 程式/文件常見噪音
    "例如：","比如：","如下","如下所示","如下圖","如下表","請參見","請參照","如下所述","如下述",
    "第","章","節","頁","表","圖","附錄","備註","註","參考","參見",
    # 標點或易出現的符號詞（保守處理，僅納入文字型態）
    "—","–","―","…","．","・","．",
}

def _is_zh(lang: str) -> bool:
    return lang.lower().startswith("zh")

def _tokenize(text: str, lang: str):
    if _is_zh(lang):
        return [w.strip() for w in jieba.cut(text) if w.strip()]
    return re.findall(r"[A-Za-z][A-Za-z\-']{1,}", text.lower())

def extract_keywords_by_paragraph(paragraphs: List[Paragraph], lang: str, topk: int = 8):
    results = []
    stop = ZH_STOP if _is_zh(lang) else EN_STOP
    for p in paragraphs:
        tokens = [t for t in _tokenize(p.text, lang) if t not in stop and len(t) > 1]
        freq = Counter(tokens)
        keywords = [w for w,_ in freq.most_common(topk)]
        results.append({"paragraph_index": p.index, "keywords": keywords})
    return results
