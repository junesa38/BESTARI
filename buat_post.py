from datetime import datetime

judul = "Artikel Otomatis dari Python"
isi = """
Ini adalah artikel otomatis dari Python.

- Dibuat hari ini
- Untuk menguji sistem integrasi Python ke Jekyll
"""

filename = f"_posts/{datetime.now().strftime('%Y-%m-%d')}-artikel-python.md"

with open(filename, "w", encoding="utf-8") as f:
    f.write(f"""---
layout: post
title: "{judul}"
date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
---

{isi}
""")

print("✅ Artikel berhasil dibuat:", filename)
