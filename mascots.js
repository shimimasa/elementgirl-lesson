// 各授業ページのキャラクター(mascot)SVGを一覧画面カード用に集約したもの。
// 各slug.htmlの <svg class="mascot">...</svg> をそのまま複製している。
const MASCOTS = {
  tsukiyomido: `<svg class="cat mascot" viewBox="0 0 120 132" aria-hidden="true">
            <path class="tail" d="M20 106 C 0 100, 2 72, 22 80" fill="none" stroke="#232433" stroke-width="10" stroke-linecap="round"/>
            <ellipse cx="60" cy="102" rx="34" ry="26" fill="#232433"/>
            <ellipse cx="46" cy="124" rx="9" ry="6" fill="#2e2f42"/>
            <ellipse cx="74" cy="124" rx="9" ry="6" fill="#2e2f42"/>
            <path d="M36 44 L29 14 L54 30 Z" fill="#232433"/>
            <path d="M84 44 L91 14 L66 30 Z" fill="#232433"/>
            <path d="M38 39 L34 21 L49 31 Z" fill="#6b5aa0"/>
            <path d="M82 39 L86 21 L71 31 Z" fill="#6b5aa0"/>
            <circle cx="60" cy="60" r="30" fill="#232433"/>
            <g class="eyes">
              <ellipse cx="49" cy="60" rx="6" ry="8" fill="#ffd66b"/>
              <ellipse cx="71" cy="60" rx="6" ry="8" fill="#ffd66b"/>
              <circle cx="49" cy="62" r="2.7" fill="#1b1c26"/>
              <circle cx="71" cy="62" r="2.7" fill="#1b1c26"/>
            </g>
            <path d="M57 68 l3 3 l3 -3 z" fill="#f0a0b0"/>
            <path d="M55 74 Q60 78 65 74" stroke="#8f93b8" fill="none" stroke-width="2" stroke-linecap="round"/>
            <path d="M28 62 h14 M29 69 h13 M78 62 h14 M78 69 h13" stroke="#8f93b8" stroke-width="1.6" stroke-linecap="round"/>
            <circle cx="60" cy="90" r="5" fill="#ffd66b"/>
            <path d="M58 4 L76 34 Q60 27 44 34 Z" fill="#4a3d8f"/>
            <ellipse cx="60" cy="35" rx="27" ry="7" fill="#5a4aa8"/>
            <circle cx="57" cy="12" r="3.6" fill="#ffd66b"/>
          </svg>`,
  mahou: `<svg class="cat mascot" viewBox="0 0 120 132" aria-hidden="true">
            <path class="tail" d="M20 106 C 0 100, 2 72, 22 80" fill="none" stroke="#232433" stroke-width="10" stroke-linecap="round"/>
            <ellipse cx="60" cy="102" rx="34" ry="26" fill="#232433"/>
            <ellipse cx="46" cy="124" rx="9" ry="6" fill="#2e2f42"/>
            <ellipse cx="74" cy="124" rx="9" ry="6" fill="#2e2f42"/>
            <path d="M36 44 L29 14 L54 30 Z" fill="#232433"/>
            <path d="M84 44 L91 14 L66 30 Z" fill="#232433"/>
            <path d="M38 39 L34 21 L49 31 Z" fill="#6b5aa0"/>
            <path d="M82 39 L86 21 L71 31 Z" fill="#6b5aa0"/>
            <circle cx="60" cy="60" r="30" fill="#232433"/>
            <g class="eyes">
              <ellipse cx="49" cy="60" rx="6" ry="8" fill="#ffd66b"/>
              <ellipse cx="71" cy="60" rx="6" ry="8" fill="#ffd66b"/>
              <circle cx="49" cy="62" r="2.7" fill="#1b1c26"/>
              <circle cx="71" cy="62" r="2.7" fill="#1b1c26"/>
            </g>
            <path d="M57 68 l3 3 l3 -3 z" fill="#f0a0b0"/>
            <path d="M55 74 Q60 78 65 74" stroke="#8f93b8" fill="none" stroke-width="2" stroke-linecap="round"/>
            <path d="M28 62 h14 M29 69 h13 M78 62 h14 M78 69 h13" stroke="#8f93b8" stroke-width="1.6" stroke-linecap="round"/>
            <circle cx="60" cy="90" r="5" fill="#ffd66b"/>
            <path d="M58 4 L76 34 Q60 27 44 34 Z" fill="#4a3d8f"/>
            <ellipse cx="60" cy="35" rx="27" ry="7" fill="#5a4aa8"/>
            <circle cx="57" cy="12" r="3.6" fill="#ffd66b"/>
          </svg>`,
  hidamari: `<svg class="owl mascot" viewBox="0 0 120 132" aria-hidden="true">
            <ellipse cx="60" cy="90" rx="34" ry="32" fill="#8a6a48"/>
            <ellipse cx="33" cy="88" rx="10" ry="20" fill="#6f5438" transform="rotate(14 33 88)"/>
            <ellipse cx="87" cy="88" rx="10" ry="20" fill="#6f5438" transform="rotate(-14 87 88)"/>
            <ellipse cx="60" cy="98" rx="21" ry="19" fill="#f3e6c8"/>
            <path d="M52 96 q4 4 8 0 M56 104 q4 4 8 0" stroke="#d8c39a" fill="none" stroke-width="1.5"/>
            <circle cx="60" cy="48" r="30" fill="#8a6a48"/>
            <path d="M34 30 L30 14 L46 24 Z" fill="#8a6a48"/>
            <path d="M86 30 L90 14 L74 24 Z" fill="#8a6a48"/>
            <circle cx="47" cy="52" r="15" fill="#f3e6c8"/>
            <circle cx="73" cy="52" r="15" fill="#f3e6c8"/>
            <g class="eyes">
              <circle cx="47" cy="52" r="8" fill="#fff"/>
              <circle cx="73" cy="52" r="8" fill="#fff"/>
              <circle cx="47" cy="52" r="5" fill="#d9931f"/>
              <circle cx="73" cy="52" r="5" fill="#d9931f"/>
              <circle cx="48" cy="53" r="2.2" fill="#2c1f10"/>
              <circle cx="74" cy="53" r="2.2" fill="#2c1f10"/>
            </g>
            <path d="M55 58 h10 l-5 9 z" fill="#d98a2b"/>
            <path d="M30 34 Q60 6 90 34 Q60 26 30 34 Z" fill="#5f7a4a"/>
            <ellipse cx="60" cy="33" rx="31" ry="6.5" fill="#6f8a56"/>
            <path d="M40 28 q20 -10 40 0" stroke="#4a6238" fill="none" stroke-width="2"/>
            <circle cx="93" cy="98" r="10" fill="rgba(180,215,240,.5)" stroke="#4a3320" stroke-width="2.5"/>
            <line x1="99" y1="106" x2="108" y2="118" stroke="#4a3320" stroke-width="4" stroke-linecap="round"/>
          </svg>`,
  hoshimeguri: `<svg class="cat mascot" viewBox="0 0 120 132" aria-hidden="true">
            <path class="tail" d="M20 106 C 0 100, 2 72, 22 80" fill="none" stroke="#232433" stroke-width="10" stroke-linecap="round"/>
            <ellipse cx="60" cy="102" rx="34" ry="26" fill="#232433"/>
            <ellipse cx="46" cy="124" rx="9" ry="6" fill="#2e2f42"/>
            <ellipse cx="74" cy="124" rx="9" ry="6" fill="#2e2f42"/>
            <path d="M36 44 L29 14 L54 30 Z" fill="#232433"/>
            <path d="M84 44 L91 14 L66 30 Z" fill="#232433"/>
            <path d="M38 39 L34 21 L49 31 Z" fill="#6b5aa0"/>
            <path d="M82 39 L86 21 L71 31 Z" fill="#6b5aa0"/>
            <circle cx="60" cy="60" r="30" fill="#232433"/>
            <g class="eyes">
              <ellipse cx="49" cy="60" rx="6" ry="8" fill="#ffd66b"/>
              <ellipse cx="71" cy="60" rx="6" ry="8" fill="#ffd66b"/>
              <circle cx="49" cy="62" r="2.7" fill="#1b1c26"/>
              <circle cx="71" cy="62" r="2.7" fill="#1b1c26"/>
            </g>
            <path d="M57 68 l3 3 l3 -3 z" fill="#f0a0b0"/>
            <path d="M55 74 Q60 78 65 74" stroke="#8f93b8" fill="none" stroke-width="2" stroke-linecap="round"/>
            <path d="M28 62 h14 M29 69 h13 M78 62 h14 M78 69 h13" stroke="#8f93b8" stroke-width="1.6" stroke-linecap="round"/>
            <circle cx="60" cy="90" r="5" fill="#ffd66b"/>
            <path d="M58 4 L76 34 Q60 27 44 34 Z" fill="#4a3d8f"/>
            <ellipse cx="60" cy="35" rx="27" ry="7" fill="#5a4aa8"/>
            <circle cx="57" cy="12" r="3.6" fill="#ffd66b"/>
          </svg>`,
  furiko: `<svg class="cat mascot" viewBox="0 0 120 132" aria-hidden="true">
            <g class="tail">
              <line x1="60" y1="94" x2="60" y2="118" stroke="#a8760a" stroke-width="4" stroke-linecap="round"/>
              <circle cx="60" cy="121" r="7" fill="#ffd66b" stroke="#a8760a" stroke-width="2"/>
            </g>
            <circle cx="60" cy="58" r="40" fill="#fdfbf4" stroke="#c9a227" stroke-width="5"/>
            <g fill="#c9a227">
              <circle cx="27" cy="28" r="10"/>
              <circle cx="93" cy="28" r="10"/>
            </g>
            <g fill="#ffd66b">
              <circle cx="27" cy="28" r="5"/>
              <circle cx="93" cy="28" r="5"/>
            </g>
            <g stroke="#c9a227" stroke-width="2.4">
              <line x1="60" y1="19" x2="60" y2="25"/>
              <line x1="60" y1="91" x2="60" y2="97"/>
              <line x1="21" y1="58" x2="27" y2="58"/>
              <line x1="93" y1="58" x2="99" y2="58"/>
            </g>
            <line x1="60" y1="58" x2="60" y2="37" stroke="#3a2a55" stroke-width="3.6" stroke-linecap="round"/>
            <line x1="60" y1="58" x2="79" y2="58" stroke="#3a2a55" stroke-width="3.6" stroke-linecap="round"/>
            <circle cx="60" cy="58" r="3.2" fill="#3a2a55"/>
            <g class="eyes">
              <circle cx="47" cy="69" r="4.2" fill="#232433"/>
              <circle cx="73" cy="69" r="4.2" fill="#232433"/>
            </g>
            <ellipse cx="40" cy="77" rx="5" ry="3.2" fill="#ffb0c0" opacity=".55"/>
            <ellipse cx="80" cy="77" rx="5" ry="3.2" fill="#ffb0c0" opacity=".55"/>
            <path d="M52 81 Q60 86 68 81" stroke="#8a760a" fill="none" stroke-width="2.2" stroke-linecap="round"/>
          </svg>`,
  onaka: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="118" rx="30" ry="7" fill="rgba(150,90,70,.18)"/>
            <!-- からだ（にっこり菌ビフィー：カプセル形） -->
            <rect x="34" y="34" width="52" height="74" rx="26" fill="#8fd06a"/>
            <rect x="34" y="34" width="52" height="74" rx="26" fill="none" stroke="#5fa843" stroke-width="3"/>
            <ellipse cx="48" cy="52" rx="7" ry="5" fill="#b6e88f" opacity=".7"/>
            <!-- 顔 -->
            <g class="eyes">
              <circle cx="50" cy="66" r="6" fill="#fff"/>
              <circle cx="70" cy="66" r="6" fill="#fff"/>
              <circle cx="51" cy="67" r="3" fill="#2c3a1a"/>
              <circle cx="71" cy="67" r="3" fill="#2c3a1a"/>
            </g>
            <ellipse cx="43" cy="76" rx="4" ry="2.6" fill="#f2a0a0" opacity=".8"/>
            <ellipse cx="77" cy="76" rx="4" ry="2.6" fill="#f2a0a0" opacity=".8"/>
            <path d="M52 78 Q60 86 68 78" stroke="#3a6a24" fill="none" stroke-width="2.6" stroke-linecap="round"/>
            <!-- 手あし -->
            <path d="M34 74 q-10 4 -12 14" stroke="#5fa843" fill="none" stroke-width="5" stroke-linecap="round"/>
            <path d="M86 74 q10 4 12 14" stroke="#5fa843" fill="none" stroke-width="5" stroke-linecap="round"/>
            <!-- たんけん帽 -->
            <path d="M36 36 Q60 12 84 36 Z" fill="#e8654b"/>
            <ellipse cx="60" cy="36" rx="27" ry="6" fill="#d8523c"/>
            <circle cx="60" cy="20" r="4.5" fill="#ffd98a"/>
          </svg>`,
  nagareru: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="28" ry="6" fill="rgba(60,90,40,.18)"/>
            <!-- しっぽ -->
            <path d="M88 100 q18 -2 20 -18" stroke="#7a5c3e" fill="none" stroke-width="11" stroke-linecap="round"/>
            <!-- からだ -->
            <ellipse cx="60" cy="92" rx="30" ry="26" fill="#8a6a48"/>
            <ellipse cx="60" cy="98" rx="19" ry="17" fill="#cfa87a"/>
            <!-- あし -->
            <ellipse cx="44" cy="114" rx="9" ry="5.5" fill="#6f5438"/>
            <ellipse cx="76" cy="114" rx="9" ry="5.5" fill="#6f5438"/>
            <!-- あたま -->
            <circle cx="60" cy="52" r="27" fill="#8a6a48"/>
            <circle cx="38" cy="34" r="7" fill="#8a6a48"/>
            <circle cx="82" cy="34" r="7" fill="#8a6a48"/>
            <circle cx="38" cy="34" r="3.4" fill="#cfa87a"/>
            <circle cx="82" cy="34" r="3.4" fill="#cfa87a"/>
            <!-- くちもと -->
            <ellipse cx="60" cy="62" rx="14" ry="10" fill="#cfa87a"/>
            <g class="eyes">
              <circle cx="49" cy="50" r="4.6" fill="#2c2015"/>
              <circle cx="71" cy="50" r="4.6" fill="#2c2015"/>
              <circle cx="50.5" cy="48.5" r="1.5" fill="#fff"/>
              <circle cx="72.5" cy="48.5" r="1.5" fill="#fff"/>
            </g>
            <ellipse cx="60" cy="58" rx="4.5" ry="3.2" fill="#2c2015"/>
            <path d="M54 66 Q60 70 66 66" stroke="#6f5438" fill="none" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M32 58 h12 M33 64 h11 M76 58 h12 M76 64 h11" stroke="#b59a78" stroke-width="1.6" stroke-linecap="round"/>
            <!-- たんけんぼうし -->
            <path d="M36 32 Q60 8 84 32 Z" fill="#4a8a3c"/>
            <ellipse cx="60" cy="32" rx="27" ry="6" fill="#3f7a34"/>
            <circle cx="60" cy="18" r="4" fill="#ffd98a"/>
          </svg>`,
  chisou: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(90,60,30,.18)"/>
            <!-- からだ（まるいモグラ） -->
            <ellipse cx="60" cy="78" rx="34" ry="38" fill="#6a5648"/>
            <ellipse cx="60" cy="90" rx="22" ry="22" fill="#a8927e"/>
            <!-- 大きなてのひら（シャベル） -->
            <ellipse cx="26" cy="88" rx="11" ry="14" fill="#e8b8a0" transform="rotate(-18 26 88)"/>
            <ellipse cx="94" cy="88" rx="11" ry="14" fill="#e8b8a0" transform="rotate(18 94 88)"/>
            <path d="M20 82 l-4 -4 M24 78 l-3 -5 M29 76 l-1 -6" stroke="#c08a70" stroke-width="2" stroke-linecap="round"/>
            <path d="M100 82 l4 -4 M96 78 l3 -5 M91 76 l1 -6" stroke="#c08a70" stroke-width="2" stroke-linecap="round"/>
            <!-- はな -->
            <ellipse cx="60" cy="62" rx="8" ry="6.5" fill="#e88aa0"/>
            <!-- め＋まるメガネ -->
            <g class="eyes">
              <circle cx="46" cy="52" r="3" fill="#2c2015"/>
              <circle cx="74" cy="52" r="3" fill="#2c2015"/>
            </g>
            <circle cx="46" cy="52" r="8.5" fill="none" stroke="#c9a227" stroke-width="2.2"/>
            <circle cx="74" cy="52" r="8.5" fill="none" stroke="#c9a227" stroke-width="2.2"/>
            <line x1="54.5" y1="52" x2="65.5" y2="52" stroke="#c9a227" stroke-width="2.2"/>
            <!-- ひげ -->
            <path d="M38 62 h-14 M39 67 h-12 M82 62 h14 M81 67 h12" stroke="#b8a08c" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M52 70 Q60 75 68 70" stroke="#4a3a2c" fill="none" stroke-width="2.2" stroke-linecap="round"/>
            <!-- ヘルメット＋ライト -->
            <path d="M30 44 Q60 14 90 44 Z" fill="#e8c53a"/>
            <ellipse cx="60" cy="44" rx="31" ry="7" fill="#d4af22"/>
            <circle cx="60" cy="26" r="6.5" fill="#fff8dc" stroke="#c9a227" stroke-width="2"/>
            <circle cx="60" cy="26" r="2.6" fill="#ffe9a8"/>
          </svg>`,
  mebae: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(60,100,20,.18)"/>
            <!-- ふたばの かみ -->
            <path d="M60 56 Q30 18 16 28 Q20 56 50 60 Z" fill="#7dc24a" stroke="#3f8a2e" stroke-width="1.6"/>
            <path d="M60 56 Q34 24 18 28" stroke="#3f8a2e" stroke-width="1.2" fill="none"/>
            <path d="M60 56 Q90 18 104 28 Q100 56 70 60 Z" fill="#7dc24a" stroke="#3f8a2e" stroke-width="1.6"/>
            <path d="M60 56 Q86 24 102 28" stroke="#3f8a2e" stroke-width="1.2" fill="none"/>
            <!-- からだ（たね） -->
            <ellipse cx="60" cy="82" rx="32" ry="36" fill="#f0dfa0" stroke="#d4b86a" stroke-width="2"/>
            <path d="M60 48 Q54 82 60 116" stroke="#d4b86a" stroke-width="1.6" fill="none"/>
            <!-- ほっぺ -->
            <ellipse cx="42" cy="88" rx="6" ry="4" fill="#f8b8b0" opacity=".7"/>
            <ellipse cx="78" cy="88" rx="6" ry="4" fill="#f8b8b0" opacity=".7"/>
            <!-- め -->
            <g class="eyes">
              <circle cx="48" cy="78" r="4" fill="#2c2015"/>
              <circle cx="72" cy="78" r="4" fill="#2c2015"/>
            </g>
            <!-- くち -->
            <path d="M52 92 Q60 98 68 92" stroke="#8a6a34" fill="none" stroke-width="2.2" stroke-linecap="round"/>
            <!-- ちいさな 根っこ -->
            <path d="M48 116 q-4 8 -10 10 M60 118 q0 9 0 12 M72 116 q4 8 10 10" stroke="#c9a86a" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>`,
  teko: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(90,60,20,.18)"/>
            <!-- アンテナ -->
            <line x1="60" y1="18" x2="60" y2="4" stroke="#8a6a42" stroke-width="3"/>
            <circle cx="60" cy="4" r="5" fill="#ffce54" stroke="#a0521f" stroke-width="1.2"/>
            <!-- あたま -->
            <circle cx="60" cy="46" r="34" fill="#e0863f" stroke="#a0521f" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="36" cy="52" rx="6" ry="4" fill="#fff0d8" opacity=".5"/>
            <ellipse cx="84" cy="52" rx="6" ry="4" fill="#fff0d8" opacity=".5"/>
            <!-- め（歯車） -->
            <g class="eyes">
              <g transform="translate(44,44)">
                <path d="M0,-10 L2.4,-9 L2.6,-6.4 L5.6,-5.2 L7.6,-7.2 L9.4,-5.4 L7.4,-3.4 L8.6,-0.4 L11.2,-0.2 L11.2,2.2 L8.6,2.4 L7.4,5.4 L9.4,7.4 L7.6,9.2 L5.6,7.2 L2.6,8.4 L2.4,11 L0,11 L-0.2,8.4 L-3.2,7.2 L-5.2,9.2 L-7,7.4 L-5,5.4 L-6.2,2.4 L-8.8,2.2 L-8.8,-0.2 L-6.2,-0.4 L-5,-3.4 L-7,-5.4 L-5.2,-7.2 L-3.2,-5.2 L-0.2,-6.4 Z" fill="#f4e8d0" stroke="#a0521f" stroke-width="1"/>
                <circle r="3.2" fill="#3a2a1a"/>
              </g>
              <g transform="translate(76,44)">
                <path d="M0,-10 L2.4,-9 L2.6,-6.4 L5.6,-5.2 L7.6,-7.2 L9.4,-5.4 L7.4,-3.4 L8.6,-0.4 L11.2,-0.2 L11.2,2.2 L8.6,2.4 L7.4,5.4 L9.4,7.4 L7.6,9.2 L5.6,7.2 L2.6,8.4 L2.4,11 L0,11 L-0.2,8.4 L-3.2,7.2 L-5.2,9.2 L-7,7.4 L-5,5.4 L-6.2,2.4 L-8.8,2.2 L-8.8,-0.2 L-6.2,-0.4 L-5,-3.4 L-7,-5.4 L-5.2,-7.2 L-3.2,-5.2 L-0.2,-6.4 Z" fill="#f4e8d0" stroke="#a0521f" stroke-width="1"/>
                <circle r="3.2" fill="#3a2a1a"/>
              </g>
            </g>
            <!-- くち -->
            <path d="M50 60 Q60 66 70 60" stroke="#7a4315" fill="none" stroke-width="2.2" stroke-linecap="round"/>
            <!-- からだ -->
            <rect x="30" y="76" width="60" height="46" rx="18" fill="#f0a860" stroke="#a0521f" stroke-width="2.5"/>
            <!-- 工具ベルト -->
            <rect x="30" y="96" width="60" height="10" fill="#7a4315"/>
            <circle cx="60" cy="101" r="5" fill="#ffce54" stroke="#a0521f" stroke-width="1.2"/>
          </svg>`,
  kome: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(60,90,20,.18)"/>
            <!-- 稲穂の かみかざり -->
            <g stroke="#c9a227" stroke-width="2.4" fill="none" stroke-linecap="round">
              <path d="M48 14 Q42 2 34 -6"/>
              <path d="M72 14 Q78 2 86 -6"/>
            </g>
            <g fill="#e8c34a" stroke="#c9a227" stroke-width=".8">
              <ellipse cx="44" cy="4" rx="3" ry="4.2" transform="rotate(-30 44 4)"/>
              <ellipse cx="39" cy="-2" rx="3" ry="4.2" transform="rotate(-30 39 -2)"/>
              <ellipse cx="34" cy="-7" rx="3" ry="4.2" transform="rotate(-30 34 -7)"/>
              <ellipse cx="76" cy="4" rx="3" ry="4.2" transform="rotate(30 76 4)"/>
              <ellipse cx="81" cy="-2" rx="3" ry="4.2" transform="rotate(30 81 -2)"/>
              <ellipse cx="86" cy="-7" rx="3" ry="4.2" transform="rotate(30 86 -7)"/>
            </g>
            <!-- あたま -->
            <circle cx="60" cy="46" r="34" fill="#eef8d0" stroke="#4a8a1f" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="36" cy="52" rx="6" ry="4" fill="#ffd8a8" opacity=".5"/>
            <ellipse cx="84" cy="52" rx="6" ry="4" fill="#ffd8a8" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="44" cy="44" rx="4.5" ry="6" fill="#33511f"/>
              <ellipse cx="76" cy="44" rx="4.5" ry="6" fill="#33511f"/>
              <circle cx="45.5" cy="41" r="1.4" fill="#fff"/>
              <circle cx="77.5" cy="41" r="1.4" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M50 60 Q60 66 70 60" stroke="#2c5c14" fill="none" stroke-width="2.2" stroke-linecap="round"/>
            <!-- からだ（着物ふう） -->
            <path d="M30 122 Q26 90 34 78 Q60 68 86 78 Q94 90 90 122 Z" fill="#7dc24a" stroke="#4a8a1f" stroke-width="2.5"/>
            <!-- おび -->
            <rect x="30" y="96" width="60" height="9" fill="#c9a227"/>
            <circle cx="60" cy="100" r="5" fill="#eef8d0" stroke="#4a8a1f" stroke-width="1.2"/>
          </svg>`,
  daibutsu: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(90,60,20,.18)"/>
            <!-- ほのおの かざり -->
            <g fill="#ffce54" stroke="#e0a020" stroke-width=".8">
              <path d="M52 10 Q47 0 53 -9 Q58 0 54 9 Z"/>
              <path d="M68 10 Q73 0 67 -9 Q62 0 66 9 Z"/>
            </g>
            <!-- あたま -->
            <circle cx="60" cy="46" r="34" fill="#f3e0b0" stroke="#8a5a2a" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="36" cy="52" rx="6" ry="4" fill="#e0a05a" opacity=".5"/>
            <ellipse cx="84" cy="52" rx="6" ry="4" fill="#e0a05a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="44" cy="44" rx="4.5" ry="6" fill="#5a3a10"/>
              <ellipse cx="76" cy="44" rx="4.5" ry="6" fill="#5a3a10"/>
              <circle cx="45.5" cy="41" r="1.4" fill="#fff"/>
              <circle cx="77.5" cy="41" r="1.4" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M50 60 Q60 66 70 60" stroke="#8a5a2a" fill="none" stroke-width="2.2" stroke-linecap="round"/>
            <!-- からだ（しずく形） -->
            <path d="M30 122 Q22 85 40 74 Q60 66 80 74 Q98 85 90 122 Z" fill="#c9822c" stroke="#8a5a2a" stroke-width="2.5"/>
            <!-- きんいろの おび -->
            <rect x="30" y="96" width="60" height="8" fill="#ffce54"/>
            <circle cx="60" cy="100" r="5" fill="#f3e0b0" stroke="#8a5a2a" stroke-width="1.2"/>
          </svg>`,
  kasane: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(90,40,70,.18)"/>
            <!-- かさなる 衣のすそ（からだ） -->
            <path d="M28 118 Q24 104 32 96 L88 96 Q96 104 92 118 Z" fill="#a56a94" stroke="#6a3a5a" stroke-width="2"/>
            <path d="M32 98 Q28 86 35 79 L85 79 Q92 86 88 98 Z" fill="#e0a6c4" stroke="#6a3a5a" stroke-width="2"/>
            <path d="M35 81 Q31 70 38 64 L82 64 Q89 70 85 81 Z" fill="#f3d9ea" stroke="#6a3a5a" stroke-width="2"/>
            <path d="M38 66 Q35 57 41 52 L79 52 Q85 57 82 66 Z" fill="#cfe3dc" stroke="#6a3a5a" stroke-width="2"/>
            <!-- あたま -->
            <circle cx="60" cy="38" r="26" fill="#fbe8d8" stroke="#6a3a5a" stroke-width="2.5"/>
            <!-- かんざし -->
            <circle cx="78" cy="24" r="5" fill="#ffd6ec" stroke="#8a4a78" stroke-width="1.2"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="42" rx="5" ry="3.4" fill="#e08aa8" opacity=".5"/>
            <ellipse cx="74" cy="42" rx="5" ry="3.4" fill="#e08aa8" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="36" rx="3.6" ry="5" fill="#5a3a52"/>
              <ellipse cx="69" cy="36" rx="3.6" ry="5" fill="#5a3a52"/>
              <circle cx="52.3" cy="33.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="33.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 50 Q60 55 67 50" stroke="#6a3a5a" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  genko: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(20,40,45,.18)"/>
            <!-- 石を つみあげた からだ -->
            <path d="M26 118 Q22 104 30 96 L90 96 Q98 104 94 118 Z" fill="#7c8e90" stroke="#223a40" stroke-width="2"/>
            <path d="M30 98 Q26 86 33 79 L87 79 Q94 86 90 98 Z" fill="#9aabab" stroke="#223a40" stroke-width="2"/>
            <path d="M33 81 Q29 70 36 64 L84 64 Q91 70 87 81 Z" fill="#b7c5c4" stroke="#223a40" stroke-width="2"/>
            <!-- 石のつぎめ -->
            <path d="M46 96 L46 118 M74 96 L74 118 M50 79 L50 96 M70 79 L70 96" stroke="#223a40" stroke-width="1.4" opacity=".35"/>
            <!-- あたま -->
            <circle cx="60" cy="40" r="25" fill="#f0d8b8" stroke="#223a40" stroke-width="2.5"/>
            <!-- かぶと -->
            <path d="M33 32 Q60 6 87 32 L83 40 Q60 22 37 40 Z" fill="#4a5f5a" stroke="#223a40" stroke-width="2"/>
            <path d="M56 10 L60 -2 L64 10 Z" fill="#d4900f" stroke="#223a40" stroke-width="1.4"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="38" rx="3.6" ry="5" fill="#223a40"/>
              <ellipse cx="69" cy="38" rx="3.6" ry="5" fill="#223a40"/>
              <circle cx="52.3" cy="35.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="35.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 52 Q60 57 67 52" stroke="#17323a" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  shiosai: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(10,60,66,.18)"/>
            <!-- からだ：うずしお -->
            <path d="M20 118 Q18 96 34 90 Q50 84 60 90 Q70 84 86 90 Q102 96 100 118 Z" fill="#0c5b66" stroke="#0d3d42" stroke-width="2"/>
            <path d="M28 100 Q30 82 46 78 Q60 74 74 78 Q90 82 92 100 Z" fill="#1f96a0" stroke="#0d3d42" stroke-width="2"/>
            <path d="M38 82 Q40 68 60 66 Q80 68 82 82 Z" fill="#5cc7c2" stroke="#0d3d42" stroke-width="2"/>
            <!-- 波の渦もよう -->
            <path d="M60 66 Q66 72 60 78 Q54 84 60 90" stroke="#0d3d42" stroke-width="1.4" fill="none" opacity=".4"/>
            <!-- あたま -->
            <circle cx="60" cy="40" r="25" fill="#f0d8b8" stroke="#0d3d42" stroke-width="2.5"/>
            <!-- 貝がらの かみかざり -->
            <path d="M35 30 Q60 4 85 30 Q78 20 60 18 Q42 20 35 30 Z" fill="#2fa8b8" stroke="#0d3d42" stroke-width="2"/>
            <path d="M55 8 Q60 -2 65 8 Q60 4 55 8 Z" fill="#ffe9a8" stroke="#0d3d42" stroke-width="1.2"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="38" rx="3.6" ry="5" fill="#0d3d42"/>
              <ellipse cx="69" cy="38" rx="3.6" ry="5" fill="#0d3d42"/>
              <circle cx="52.3" cy="35.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="35.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 52 Q60 57 67 52" stroke="#0d3d42" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  hitotsubu: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(20,40,80,.18)"/>
            <!-- からだ：投票箱 -->
            <path d="M28 118 L26 82 Q26 76 32 76 L88 76 Q94 76 94 82 L92 118 Z" fill="#1a3c6e" stroke="#16294a" stroke-width="2"/>
            <rect x="26" y="76" width="68" height="10" rx="3" fill="#e0a838" stroke="#16294a" stroke-width="2"/>
            <rect x="52" y="79" width="16" height="4" rx="2" fill="#16294a"/>
            <!-- とうひょう用紙が のぞく -->
            <path d="M56 79 L64 79 L62 62 Q60 58 58 62 Z" fill="#fff" stroke="#16294a" stroke-width="1.5"/>
            <!-- はた -->
            <path d="M60 6 L60 22" stroke="#16294a" stroke-width="2"/>
            <path d="M60 6 L76 12 L60 18 Z" fill="#ffe9a8" stroke="#16294a" stroke-width="1.5"/>
            <!-- あたま -->
            <circle cx="60" cy="42" r="25" fill="#f6e6c8" stroke="#16294a" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="46" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="46" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="40" rx="3.6" ry="5" fill="#16294a"/>
              <ellipse cx="69" cy="40" rx="3.6" ry="5" fill="#16294a"/>
              <circle cx="52.3" cy="37.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="37.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 54 Q60 59 67 54" stroke="#16294a" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  muromachi: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(40,48,26,.18)"/>
            <!-- 盛り砂の からだ（銀沙灘の しま模様） -->
            <path d="M20 118 Q16 102 26 94 L94 94 Q104 102 100 118 Z" fill="#d8d0a8" stroke="#3e4a2e" stroke-width="2"/>
            <path d="M26 96 Q22 82 32 74 L88 74 Q98 82 94 96 Z" fill="#e6ddb8" stroke="#3e4a2e" stroke-width="2"/>
            <path d="M32 76 Q28 64 37 57 L83 57 Q92 64 88 76 Z" fill="#f2ead0" stroke="#3e4a2e" stroke-width="2"/>
            <!-- 砂の すじもよう -->
            <path d="M30 92 Q60 86 90 92 M35 96 Q60 91 85 96" stroke="#3e4a2e" stroke-width="1.2" opacity=".3" fill="none"/>
            <path d="M36 74 Q60 69 84 74" stroke="#3e4a2e" stroke-width="1.2" opacity=".3" fill="none"/>
            <!-- あたま -->
            <circle cx="60" cy="40" r="25" fill="#f4eed8" stroke="#3e4a2e" stroke-width="2.5"/>
            <!-- 頭かざり：向月台をイメージした ちいさな砂山 -->
            <path d="M44 22 Q60 4 76 22 Z" fill="#e6ddb8" stroke="#3e4a2e" stroke-width="2"/>
            <path d="M60 4 L60 -3" stroke="#c99a28" stroke-width="2" stroke-linecap="round"/>
            <circle cx="60" cy="-5" r="3" fill="#c99a28"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="38" rx="3.6" ry="5" fill="#2f3826"/>
              <ellipse cx="69" cy="38" rx="3.6" ry="5" fill="#2f3826"/>
              <circle cx="52.3" cy="35.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="35.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 52 Q60 57 67 52" stroke="#262e1a" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  jidosha: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(46,38,30,.18)"/>
            <!-- 六角ボルトの からだ -->
            <path d="M60 60 L90 78 L90 106 L60 124 L30 106 L30 78 Z" fill="#9a968a" stroke="#2e2b26" stroke-width="2"/>
            <path d="M60 66 L84 80 L84 104 L60 118 L36 104 L36 80 Z" fill="#b8b4a6" stroke="#2e2b26" stroke-width="1.4" opacity=".6"/>
            <!-- ネジ山のライン -->
            <path d="M32 88 L88 88 M32 96 L88 96" stroke="#2e2b26" stroke-width="1.4" opacity=".3"/>
            <!-- 安全ベルト -->
            <path d="M30 92 L90 92" stroke="#f0a838" stroke-width="6" opacity=".85"/>
            <!-- あたま -->
            <circle cx="60" cy="40" r="25" fill="#f0d8b8" stroke="#2e2b26" stroke-width="2.5"/>
            <!-- 安全ヘルメット -->
            <path d="M33 32 Q60 4 87 32 L87 38 Q60 24 33 38 Z" fill="#f0a838" stroke="#2e2b26" stroke-width="2"/>
            <circle cx="60" cy="14" r="3" fill="#c9821e"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="38" rx="3.6" ry="5" fill="#2e2b26"/>
              <ellipse cx="69" cy="38" rx="3.6" ry="5" fill="#2e2b26"/>
              <circle cx="52.3" cy="35.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="35.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 52 Q60 57 67 52" stroke="#24211d" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  sengoku: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(46,30,24,.18)"/>
            <!-- 火縄が とぐろを まいた からだ -->
            <path d="M60 62 Q92 68 90 92 Q88 116 60 116 Q38 116 38 98 Q38 84 56 84 Q68 84 68 94" fill="none" stroke="#8a5a3a" stroke-width="15" stroke-linecap="round"/>
            <!-- あたま -->
            <circle cx="60" cy="40" r="25" fill="#f0d8b8" stroke="#2e2622" stroke-width="2.5"/>
            <!-- 陣笠 -->
            <path d="M30 30 Q60 2 90 30 L86 37 Q60 18 34 37 Z" fill="#b8382a" stroke="#2e2622" stroke-width="2"/>
            <circle cx="60" cy="9" r="3" fill="#e8a838"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="38" rx="3.6" ry="5" fill="#2e2622"/>
              <ellipse cx="69" cy="38" rx="3.6" ry="5" fill="#2e2622"/>
              <circle cx="52.3" cy="35.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="35.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 52 Q60 57 67 52" stroke="#1a1614" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  jomon: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(46,54,32,.18)"/>
            <!-- からだ（縄目もよう） -->
            <path d="M60 60 Q94 66 90 96 Q86 118 60 118 Q34 118 30 96 Q26 66 60 60 Z" fill="#c9a227" stroke="#2e3620" stroke-width="2.5"/>
            <path d="M36 78 Q60 87 84 78" stroke="#8a5a1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <path d="M34 92 Q60 101 86 92" stroke="#8a5a1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <path d="M37 106 Q60 113 83 106" stroke="#8a5a1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <!-- あたま（ハート型） -->
            <path d="M60 20 C46 8 25 18 29 37 C32 52 50 62 60 70 C70 62 88 52 91 37 C95 18 74 8 60 20 Z" fill="#e8c878" stroke="#2e3620" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="42" cy="46" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="78" cy="46" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め（大きな丸い め） -->
            <g class="eyes">
              <ellipse cx="46" cy="35" rx="8" ry="6.4" fill="#2e3620"/>
              <ellipse cx="74" cy="35" rx="8" ry="6.4" fill="#2e3620"/>
              <circle cx="48.4" cy="32.6" r="1.6" fill="#fff"/>
              <circle cx="76.4" cy="32.6" r="1.6" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M52 52 Q60 57 68 52" stroke="#202a16" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  edo: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(31,44,58,.18)"/>
            <!-- からだ（槍の柄・朱と金の装飾帯） -->
            <rect x="48" y="60" width="24" height="58" rx="8" fill="#8a1a2a" stroke="#1f2c3a" stroke-width="2.5"/>
            <rect x="43" y="76" width="34" height="10" rx="3" fill="#c9a227" stroke="#1f2c3a" stroke-width="1.5"/>
            <rect x="43" y="98" width="34" height="8" rx="3" fill="#c9a227" stroke="#1f2c3a" stroke-width="1.5"/>
            <!-- あたま -->
            <circle cx="60" cy="38" r="24" fill="#f0d8b8" stroke="#1f2c3a" stroke-width="2.5"/>
            <!-- 毛槍の房かざり(かみ) -->
            <path d="M38 26 Q33 4 42 10 Q44 -4 53 8 Q58 -6 64 8 Q71 -4 76 8 Q84 4 80 26" fill="#4a5c74" stroke="#1f2c3a" stroke-width="2"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="38" rx="3.6" ry="5" fill="#1f2c3a"/>
              <ellipse cx="69" cy="38" rx="3.6" ry="5" fill="#1f2c3a"/>
              <circle cx="52.3" cy="35.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="35.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 52 Q60 57 67 52" stroke="#14202c" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  sakoku: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(22,48,60,.18)"/>
            <!-- からだ（末広扇：要から地紙が末広がりに開く） -->
            <path d="M60 118 L44 66 A20 20 0 0 1 76 66 Z" fill="#1a6a7a" stroke="#16303c" stroke-width="2.5"/>
            <circle cx="60" cy="118" r="4" fill="#c9a227" stroke="#16303c" stroke-width="1.5"/>
            <path d="M48 78 Q60 88 72 78" stroke="#c9a227" fill="none" stroke-width="2"/>
            <path d="M46 92 Q60 104 74 92" stroke="#c9a227" fill="none" stroke-width="2"/>
            <!-- あたま -->
            <circle cx="60" cy="38" r="24" fill="#f0d8b8" stroke="#16303c" stroke-width="2.5"/>
            <!-- 開いた扇の かみかざり -->
            <path d="M30 30 A30 30 0 0 1 90 30 L82 22 A22 22 0 0 0 38 22 Z" fill="#e8f0f2" stroke="#16303c" stroke-width="2"/>
            <path d="M40 24 L40 14 M50 19 L51 9 M60 17 L60 7 M70 19 L69 9 M80 24 L80 14" stroke="#1a6a7a" stroke-width="1.6" stroke-linecap="round"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="38" rx="3.6" ry="5" fill="#16303c"/>
              <ellipse cx="69" cy="38" rx="3.6" ry="5" fill="#16303c"/>
              <circle cx="52.3" cy="35.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="35.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 52 Q60 57 67 52" stroke="#10222c" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  sanken: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(40,20,80,.18)"/>
            <!-- からだ：裁判官のローブ -->
            <path d="M30 118 L26 78 Q26 70 34 68 L86 68 Q94 70 94 78 L90 118 Z" fill="#3a1f6e" stroke="#2a1a4a" stroke-width="2"/>
            <path d="M50 70 L52 118 M70 70 L68 118" stroke="#ffe9a8" stroke-width="2" opacity=".6"/>
            <!-- 天びん：頭上にうかぶ -->
            <line x1="60" y1="6" x2="60" y2="18" stroke="#2a1a4a" stroke-width="2.5"/>
            <line x1="34" y1="18" x2="86" y2="18" stroke="#2a1a4a" stroke-width="3" stroke-linecap="round"/>
            <line x1="34" y1="18" x2="30" y2="30" stroke="#2a1a4a" stroke-width="1.6"/>
            <line x1="86" y1="18" x2="90" y2="30" stroke="#2a1a4a" stroke-width="1.6"/>
            <path d="M22 30 Q30 40 38 30" fill="none" stroke="#2a1a4a" stroke-width="1.6"/>
            <path d="M82 30 Q90 40 98 30" fill="none" stroke="#2a1a4a" stroke-width="1.6"/>
            <circle cx="60" cy="18" r="3.4" fill="#d4a017" stroke="#2a1a4a" stroke-width="1.2"/>
            <!-- あたま -->
            <circle cx="60" cy="46" r="25" fill="#f6e6c8" stroke="#2a1a4a" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="50" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="50" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="44" rx="3.6" ry="5" fill="#2a1a4a"/>
              <ellipse cx="69" cy="44" rx="3.6" ry="5" fill="#2a1a4a"/>
              <circle cx="52.3" cy="41.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="41.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 58 Q60 63 67 58" stroke="#2a1a4a" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  zeikin: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,61,36,.18)"/>
            <!-- からだ（大きな金貨） -->
            <circle cx="60" cy="97" r="30" fill="#e8a838" stroke="#143d24" stroke-width="2.5"/>
            <circle cx="60" cy="97" r="20" fill="none" stroke="#143d24" stroke-width="2" opacity=".5"/>
            <circle cx="60" cy="97" r="7" fill="#f2f9f3" stroke="#143d24" stroke-width="1.6"/>
            <path d="M60 81 L60 77 M60 117 L60 121 M44 97 L40 97 M80 97 L84 97 M49 86 L46 83 M71 86 L74 83 M49 108 L46 111 M71 108 L74 111" stroke="#143d24" stroke-width="2" stroke-linecap="round"/>
            <!-- あたま -->
            <circle cx="60" cy="38" r="24" fill="#f0d8b8" stroke="#143d24" stroke-width="2.5"/>
            <!-- かみかざり（金の光の輪） -->
            <path d="M30 30 A30 30 0 0 1 90 30 L82 22 A22 22 0 0 0 38 22 Z" fill="#ffe9a8" stroke="#143d24" stroke-width="2"/>
            <path d="M40 24 L40 14 M50 19 L51 9 M60 17 L60 7 M70 19 L69 9 M80 24 L80 14" stroke="#c97a1e" stroke-width="1.6" stroke-linecap="round"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="38" rx="3.6" ry="5" fill="#143d24"/>
              <ellipse cx="69" cy="38" rx="3.6" ry="5" fill="#143d24"/>
              <circle cx="52.3" cy="35.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="35.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 52 Q60 57 67 52" stroke="#0f2a18" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  mihashira: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(20,50,30,.18)"/>
            <!-- からだ：柱もようの ころも -->
            <path d="M30 118 L26 78 Q26 70 34 68 L86 68 Q94 70 94 78 L90 118 Z" fill="#1f5c34" stroke="#1a3324" stroke-width="2"/>
            <path d="M42 70 L43 118 M60 70 L60 118 M78 70 L77 118" stroke="#ffe9a8" stroke-width="2.4" opacity=".6"/>
            <!-- 3本柱：頭上にうかぶ -->
            <line x1="60" y1="4" x2="60" y2="13" stroke="#1a3324" stroke-width="2.2"/>
            <line x1="37" y1="13" x2="83" y2="13" stroke="#1a3324" stroke-width="3" stroke-linecap="round"/>
            <line x1="41" y1="13" x2="41" y2="28" stroke="#1a3324" stroke-width="3.2" stroke-linecap="round"/>
            <line x1="60" y1="13" x2="60" y2="28" stroke="#1a3324" stroke-width="3.2" stroke-linecap="round"/>
            <line x1="79" y1="13" x2="79" y2="28" stroke="#1a3324" stroke-width="3.2" stroke-linecap="round"/>
            <circle cx="60" cy="13" r="3.4" fill="#d4a017" stroke="#1a3324" stroke-width="1.2"/>
            <!-- あたま -->
            <circle cx="60" cy="46" r="25" fill="#f6e6c8" stroke="#1a3324" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="50" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="50" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="44" rx="3.6" ry="5" fill="#1a3324"/>
              <ellipse cx="69" cy="44" rx="3.6" ry="5" fill="#1a3324"/>
              <circle cx="52.3" cy="41.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="41.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 58 Q60 63 67 58" stroke="#1a3324" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  musubi: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(15,40,55,.18)"/>
            <!-- からだ：糸もようの ころも -->
            <path d="M30 118 L26 78 Q26 70 34 68 L86 68 Q94 70 94 78 L90 118 Z" fill="#1a5c7a" stroke="#0f2a3a" stroke-width="2"/>
            <path d="M40 70 Q50 90 40 118 M60 70 Q70 90 60 118 M80 70 Q70 90 80 118" stroke="#ffe9a8" stroke-width="2" opacity=".6" fill="none"/>
            <!-- 世界をむすぶ糸：頭上にうかぶ3つの国と糸 -->
            <circle cx="40" cy="10" r="3.2" fill="#ffe9a8" stroke="#0f2a3a" stroke-width="1.2"/>
            <circle cx="80" cy="10" r="3.2" fill="#ffe9a8" stroke="#0f2a3a" stroke-width="1.2"/>
            <circle cx="60" cy="25" r="3.4" fill="#d4a017" stroke="#0f2a3a" stroke-width="1.2"/>
            <line x1="40" y1="10" x2="80" y2="10" stroke="#0f2a3a" stroke-width="1.6"/>
            <line x1="40" y1="10" x2="60" y2="25" stroke="#0f2a3a" stroke-width="1.6"/>
            <line x1="80" y1="10" x2="60" y2="25" stroke="#0f2a3a" stroke-width="1.6"/>
            <!-- あたま -->
            <circle cx="60" cy="46" r="25" fill="#f6e6c8" stroke="#0f2a3a" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="50" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="50" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="44" rx="3.6" ry="5" fill="#0f2a3a"/>
              <ellipse cx="69" cy="44" rx="3.6" ry="5" fill="#0f2a3a"/>
              <circle cx="52.3" cy="41.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="41.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 58 Q60 63 67 58" stroke="#0f2a3a" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  kurofune: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- もくもくの けむりの からだ -->
            <path d="M26 118 Q22 104 30 96 L90 96 Q98 104 94 118 Z" fill="#6a6f7c" stroke="#1c2436" stroke-width="2"/>
            <path d="M30 98 Q26 86 33 79 L87 79 Q94 86 90 98 Z" fill="#8f95a2" stroke="#1c2436" stroke-width="2"/>
            <path d="M33 81 Q29 70 36 64 L84 64 Q91 70 87 81 Z" fill="#b8bcc8" stroke="#1c2436" stroke-width="2"/>
            <!-- けむりの もくもく輪郭 -->
            <path d="M46 96 L46 118 M74 96 L74 118 M50 79 L50 96 M70 79 L70 96" stroke="#1c2436" stroke-width="1.4" opacity=".25"/>
            <!-- あたま -->
            <circle cx="60" cy="40" r="25" fill="#f0d8b8" stroke="#1c2436" stroke-width="2.5"/>
            <!-- えんとつぼうし -->
            <path d="M33 32 Q60 6 87 32 L83 40 Q60 22 37 40 Z" fill="#2a2e38" stroke="#1c2436" stroke-width="2"/>
            <path d="M56 10 L60 -2 L64 10 Z" fill="#d4900f" stroke="#1c2436" stroke-width="1.4"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="44" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="38" rx="3.6" ry="5" fill="#1c2436"/>
              <ellipse cx="69" cy="38" rx="3.6" ry="5" fill="#1c2436"/>
              <circle cx="52.3" cy="35.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="35.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 52 Q60 57 67 52" stroke="#131a28" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  mizuya: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(20,40,45,.18)"/>
            <!-- 石垣（水屋の土台） -->
            <path d="M22 118 Q20 100 28 92 L92 92 Q100 100 98 118 Z" fill="#9aabab" stroke="#22402e" stroke-width="2"/>
            <path d="M30 94 L30 116 M46 94 L46 116 M62 94 L62 116 M78 94 L78 116 M94 94 L94 116" stroke="#22402e" stroke-width="1.4" opacity=".3"/>
            <!-- 水屋の壁（土台の上） -->
            <path d="M30 92 L30 62 L90 62 L90 92 Z" fill="#c9a56a" stroke="#22402e" stroke-width="2"/>
            <!-- 切妻屋根 -->
            <path d="M20 62 L60 30 L100 62 Z" fill="#4a5f5a" stroke="#22402e" stroke-width="2"/>
            <path d="M56 30 L60 20 L64 30 Z" fill="#4a90a4" stroke="#22402e" stroke-width="1.4"/>
            <!-- あたま -->
            <circle cx="60" cy="46" r="22" fill="#f0d8b8" stroke="#22402e" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="47" cy="50" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="73" cy="50" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="52" cy="44" rx="3.6" ry="5" fill="#22402e"/>
              <ellipse cx="68" cy="44" rx="3.6" ry="5" fill="#22402e"/>
              <circle cx="53.3" cy="41.5" r="1.2" fill="#fff"/>
              <circle cx="69.3" cy="41.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 58 Q60 63 67 58" stroke="#173a28" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  kanra: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(25,45,15,.18)"/>
            <!-- キャベツの葉が かさなる からだ -->
            <path d="M20 116 Q14 98 30 90 Q45 82 60 90 Q75 82 90 90 Q106 98 100 116 Z" fill="#7ab648" stroke="#26401c" stroke-width="2"/>
            <path d="M26 96 Q22 80 38 74 Q49 68 60 74 Q71 68 82 74 Q98 80 94 96 Z" fill="#8ec65a" stroke="#26401c" stroke-width="2"/>
            <path d="M32 76 Q29 62 42 57 Q51 53 60 58 Q69 53 78 57 Q91 62 88 76 Z" fill="#a8d86e" stroke="#26401c" stroke-width="2"/>
            <!-- はみゃく -->
            <path d="M60 90 L60 116 M60 74 L60 90 M60 58 L60 74" stroke="#26401c" stroke-width="1.4" opacity=".3"/>
            <!-- あたま（キャベツの しん） -->
            <circle cx="60" cy="40" r="24" fill="#f3ecc8" stroke="#26401c" stroke-width="2.5"/>
            <!-- はっぱの かんむり -->
            <path d="M40 24 Q46 4 60 10 Q74 4 80 24 Q68 16 60 20 Q52 16 40 24 Z" fill="#5a9e3a" stroke="#26401c" stroke-width="2"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="45" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <ellipse cx="74" cy="45" rx="5" ry="3.4" fill="#e0876a" opacity=".5"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="39" rx="3.6" ry="5" fill="#26401c"/>
              <ellipse cx="69" cy="39" rx="3.6" ry="5" fill="#26401c"/>
              <circle cx="52.3" cy="36.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="36.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 53 Q60 58 67 53" stroke="#1c3512" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  okinawa: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(60,26,10,.18)"/>
            <!-- 赤瓦を かさねた からだ -->
            <path d="M26 118 Q22 104 30 96 L90 96 Q98 104 94 118 Z" fill="#a8492a" stroke="#4a2a16" stroke-width="2"/>
            <path d="M30 98 Q26 86 33 79 L87 79 Q94 86 90 98 Z" fill="#c1573a" stroke="#4a2a16" stroke-width="2"/>
            <path d="M33 81 Q29 70 36 64 L84 64 Q91 70 87 81 Z" fill="#d97a52" stroke="#4a2a16" stroke-width="2"/>
            <!-- 瓦の つぎめ -->
            <path d="M46 96 L46 118 M74 96 L74 118 M50 79 L50 96 M70 79 L70 96" stroke="#4a2a16" stroke-width="1.4" opacity=".35"/>
            <!-- たてがみ -->
            <path d="M24 36 Q14 26 20 14 Q28 18 30 28 Q28 10 40 4 Q42 16 38 26 Q44 6 58 4 Q56 16 50 26 Q60 8 74 10 Q66 20 58 28 Q72 14 86 20 Q76 28 66 30 Q80 24 90 34 Q78 36 68 36" fill="#8a3018" stroke="#4a2a16" stroke-width="1.6" stroke-linejoin="round"/>
            <!-- あたま -->
            <circle cx="60" cy="42" r="24" fill="#e8b078" stroke="#4a2a16" stroke-width="2.5"/>
            <!-- みみ -->
            <ellipse cx="37" cy="30" rx="7" ry="9" fill="#c1573a" stroke="#4a2a16" stroke-width="2"/>
            <ellipse cx="83" cy="30" rx="7" ry="9" fill="#c1573a" stroke="#4a2a16" stroke-width="2"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="48" rx="5.5" ry="3.6" fill="#e0876a" opacity=".55"/>
            <ellipse cx="74" cy="48" rx="5.5" ry="3.6" fill="#e0876a" opacity=".55"/>
            <!-- め -->
            <g class="eyes">
              <circle cx="51" cy="40" r="5.4" fill="#fff"/>
              <circle cx="69" cy="40" r="5.4" fill="#fff"/>
              <circle cx="51.6" cy="40.6" r="3.2" fill="#3a2010"/>
              <circle cx="69.6" cy="40.6" r="3.2" fill="#3a2010"/>
              <circle cx="52.8" cy="38.8" r="1.1" fill="#fff"/>
              <circle cx="70.8" cy="38.8" r="1.1" fill="#fff"/>
            </g>
            <!-- はな -->
            <ellipse cx="60" cy="50" rx="4.4" ry="2.8" fill="#4a2a16"/>
            <!-- くち（あ形） -->
            <path d="M46 56 Q60 72 74 56 Q60 65 46 56" fill="#7a2010" stroke="#3a2010" stroke-width="2" stroke-linejoin="round"/>
            <path d="M52.5 56 L54 61 M67.5 56 L66 61" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
          </svg>`,
  ryuhyo: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(10,40,60,.15)"/>
            <!-- 氷塊を かさねた からだ -->
            <path d="M26 118 Q22 104 30 96 L90 96 Q98 104 94 118 Z" fill="#a8d8e8" stroke="#163044" stroke-width="2"/>
            <path d="M30 98 Q26 86 33 79 L87 79 Q94 86 90 98 Z" fill="#cdeaf5" stroke="#163044" stroke-width="2"/>
            <path d="M33 81 Q29 70 36 64 L84 64 Q91 70 87 81 Z" fill="#eafbff" stroke="#163044" stroke-width="2"/>
            <!-- 氷の つぎめ -->
            <path d="M46 96 L46 118 M74 96 L74 118 M50 79 L50 96 M70 79 L70 96" stroke="#163044" stroke-width="1.4" opacity=".3"/>
            <!-- 氷の かんむり -->
            <path d="M24 36 Q14 26 20 14 Q28 18 30 28 Q28 10 40 4 Q42 16 38 26 Q44 6 58 4 Q56 16 50 26 Q60 8 74 10 Q66 20 58 28 Q72 14 86 20 Q76 28 66 30 Q80 24 90 34 Q78 36 68 36" fill="#eef8fb" stroke="#163044" stroke-width="1.6" stroke-linejoin="round"/>
            <!-- あたま -->
            <circle cx="60" cy="42" r="24" fill="#eef8fb" stroke="#163044" stroke-width="2.5"/>
            <!-- みみ（氷の かけら） -->
            <ellipse cx="37" cy="30" rx="7" ry="9" fill="#cdeaf5" stroke="#163044" stroke-width="2"/>
            <ellipse cx="83" cy="30" rx="7" ry="9" fill="#cdeaf5" stroke="#163044" stroke-width="2"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="48" rx="5.5" ry="3.6" fill="#a8d8e8" opacity=".55"/>
            <ellipse cx="74" cy="48" rx="5.5" ry="3.6" fill="#a8d8e8" opacity=".55"/>
            <!-- め -->
            <g class="eyes">
              <circle cx="51" cy="40" r="5.4" fill="#fff"/>
              <circle cx="69" cy="40" r="5.4" fill="#fff"/>
              <circle cx="51.6" cy="40.6" r="3.2" fill="#0d2536"/>
              <circle cx="69.6" cy="40.6" r="3.2" fill="#0d2536"/>
              <circle cx="52.8" cy="38.8" r="1.1" fill="#fff"/>
              <circle cx="70.8" cy="38.8" r="1.1" fill="#fff"/>
            </g>
            <!-- はな -->
            <ellipse cx="60" cy="50" rx="4.4" ry="2.8" fill="#163044"/>
            <!-- くち（にっこり） -->
            <path d="M47 56 Q60 65 73 56" fill="none" stroke="#163044" stroke-width="2.4" stroke-linecap="round"/>
          </svg>`,
  nenrin: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(40,30,10,.15)"/>
            <!-- 切り株の からだ -->
            <path d="M26 118 Q22 104 30 96 L90 96 Q98 104 94 118 Z" fill="#8a6438" stroke="#2b2013" stroke-width="2"/>
            <path d="M30 98 Q26 86 33 79 L87 79 Q94 86 90 98 Z" fill="#a8845a" stroke="#2b2013" stroke-width="2"/>
            <path d="M33 81 Q29 70 36 64 L84 64 Q91 70 87 81 Z" fill="#c9a878" stroke="#2b2013" stroke-width="2"/>
            <!-- 木目のすじ -->
            <path d="M46 96 L46 118 M74 96 L74 118 M50 79 L50 96 M70 79 L70 96" stroke="#2b2013" stroke-width="1.4" opacity=".25"/>
            <!-- 葉っぱの かんむり -->
            <path d="M60 6 Q46 10 44 22 Q56 22 60 12 Q64 22 76 22 Q74 10 60 6 Z" fill="#4a9a4a" stroke="#2b2013" stroke-width="1.6" stroke-linejoin="round"/>
            <path d="M60 8 Q52 18 44 22" fill="none" stroke="#2b6a2a" stroke-width="1" opacity=".5"/>
            <path d="M60 8 Q68 18 76 22" fill="none" stroke="#2b6a2a" stroke-width="1" opacity=".5"/>
            <!-- あたま（年輪の 切り口） -->
            <circle cx="60" cy="42" r="24" fill="#e8d4a0" stroke="#2b2013" stroke-width="2.5"/>
            <circle cx="60" cy="42" r="18" fill="none" stroke="#c9a878" stroke-width="2"/>
            <circle cx="60" cy="42" r="12" fill="none" stroke="#a8845a" stroke-width="1.8"/>
            <!-- みみ（葉っぱ） -->
            <path d="M30 26 Q20 22 20 12 Q30 12 34 22 Z" fill="#4a9a4a" stroke="#2b2013" stroke-width="2"/>
            <path d="M90 26 Q100 22 100 12 Q90 12 86 22 Z" fill="#4a9a4a" stroke="#2b2013" stroke-width="2"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="48" rx="5.5" ry="3.6" fill="#e0a020" opacity=".4"/>
            <ellipse cx="74" cy="48" rx="5.5" ry="3.6" fill="#e0a020" opacity=".4"/>
            <!-- め -->
            <g class="eyes">
              <circle cx="51" cy="40" r="5.4" fill="#fff"/>
              <circle cx="69" cy="40" r="5.4" fill="#fff"/>
              <circle cx="51.6" cy="40.6" r="3.2" fill="#241a0d"/>
              <circle cx="69.6" cy="40.6" r="3.2" fill="#241a0d"/>
              <circle cx="52.8" cy="38.8" r="1.1" fill="#fff"/>
              <circle cx="70.8" cy="38.8" r="1.1" fill="#fff"/>
            </g>
            <!-- はな -->
            <ellipse cx="60" cy="50" rx="4.4" ry="2.8" fill="#2b2013"/>
            <!-- くち（にっこり） -->
            <path d="M47 56 Q60 65 73 56" fill="none" stroke="#2b2013" stroke-width="2.4" stroke-linecap="round"/>
          </svg>`,
  hoshizora: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(10,20,40,.15)"/>
            <!-- きらめき（左右） -->
            <path class="twinkle" d="M18 30 L21 38 L29 41 L21 44 L18 52 L15 44 L7 41 L15 38 Z" fill="#ffe38a"/>
            <path class="twinkle t2" d="M100 22 L102 28 L108 30 L102 32 L100 38 L98 32 L92 30 L98 28 Z" fill="#ffe38a"/>
            <!-- 星の からだ（外側・かげ） -->
            <path d="M60 14 L74 47 L110 48 L81 69 L92 104 L60 84 L28 104 L39 69 L10 48 L46 47 Z" fill="#e0a020" stroke="#1f3a63" stroke-width="2.5" stroke-linejoin="round"/>
            <!-- 星の からだ（内側・ハイライト） -->
            <path d="M60 28 L68 48 L89 49 L72 62 L79 84 L60 71 L41 84 L48 62 L31 49 L52 48 Z" fill="#ffd75e"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="66" rx="5.5" ry="3.6" fill="#e0703a" opacity=".4"/>
            <ellipse cx="74" cy="66" rx="5.5" ry="3.6" fill="#e0703a" opacity=".4"/>
            <!-- め -->
            <g class="eyes">
              <circle cx="50" cy="58" r="5.4" fill="#fff"/>
              <circle cx="70" cy="58" r="5.4" fill="#fff"/>
              <circle cx="50.6" cy="58.6" r="3.2" fill="#10233f"/>
              <circle cx="70.6" cy="58.6" r="3.2" fill="#10233f"/>
              <circle cx="51.8" cy="56.8" r="1.1" fill="#fff"/>
              <circle cx="71.8" cy="56.8" r="1.1" fill="#fff"/>
            </g>
            <!-- くち（にっこり） -->
            <path d="M48 72 Q60 80 72 72" fill="none" stroke="#10233f" stroke-width="2.4" stroke-linecap="round"/>
          </svg>`,
  gaitou: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- 台座 -->
            <path d="M40 118 L44 100 L76 100 L80 118 Z" fill="#2a2e38" stroke="#1c2436" stroke-width="2"/>
            <!-- 柱 -->
            <rect x="53" y="62" width="14" height="40" rx="3" fill="#3a3f4c" stroke="#1c2436" stroke-width="2"/>
            <!-- うで（腕飾り） -->
            <path d="M53 70 Q38 68 34 56" stroke="#1c2436" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M67 70 Q82 68 86 56" stroke="#1c2436" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- ランプの ふち（傘） -->
            <path d="M30 30 Q60 8 90 30 L86 41 Q60 24 34 41 Z" fill="#2a2e38" stroke="#1c2436" stroke-width="2"/>
            <path d="M56 4 L60 -6 L64 4 Z" fill="#ffce54" stroke="#1c2436" stroke-width="1.2"/>
            <!-- ランプ（あたま） -->
            <circle cx="60" cy="42" r="26" fill="#fff3cf" stroke="#1c2436" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="48" rx="5" ry="3.4" fill="#ffb070" opacity=".55"/>
            <ellipse cx="74" cy="48" rx="5" ry="3.4" fill="#ffb070" opacity=".55"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="42" rx="3.6" ry="5" fill="#1c2436"/>
              <ellipse cx="69" cy="42" rx="3.6" ry="5" fill="#1c2436"/>
              <circle cx="52.3" cy="39.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="39.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 56 Q60 61 67 56" stroke="#131a28" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  kanmuri: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- からだ -->
            <path d="M40 118 L44 100 L76 100 L80 118 Z" fill="#3a2550" stroke="#241c30" stroke-width="2"/>
            <!-- 纓（えい、後ろの飾り） -->
            <path d="M80 58 Q104 46 110 24 Q100 52 84 66 Z" fill="#241c30" stroke="#140e1c" stroke-width="2"/>
            <!-- 冠本体（山型） -->
            <path d="M32 68 Q30 28 60 18 Q90 28 88 68 Z" fill="#6a3d9a" stroke="#241c30" stroke-width="2.5"/>
            <!-- 額の帯 -->
            <rect x="30" y="60" width="60" height="10" rx="4" fill="#ffce54" stroke="#241c30" stroke-width="1.5"/>
            <!-- 顔 -->
            <circle cx="60" cy="94" r="26" fill="#fff3cf" stroke="#241c30" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="100" rx="5" ry="3.4" fill="#ffb070" opacity=".55"/>
            <ellipse cx="74" cy="100" rx="5" ry="3.4" fill="#ffb070" opacity=".55"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="94" rx="3.6" ry="5" fill="#241c30"/>
              <ellipse cx="69" cy="94" rx="3.6" ry="5" fill="#241c30"/>
              <circle cx="52.3" cy="91.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="91.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 108 Q60 113 67 108" stroke="#221830" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  kiridoshi: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- からだ（岩の土台） -->
            <path d="M38 118 L42 98 L78 98 L82 118 Z" fill="#4a5a52" stroke="#1c2622" stroke-width="2"/>
            <!-- うしろの岩かげ -->
            <path d="M82 60 Q104 54 108 30 Q98 56 86 68 Z" fill="#3a4a44" stroke="#1c2622" stroke-width="2"/>
            <!-- 切通し（山を切り開いた 岩の かべ） -->
            <path d="M30 70 Q28 32 50 20 L54 70 Z" fill="#6b7d74" stroke="#1c2622" stroke-width="2.5"/>
            <path d="M90 70 Q92 32 70 20 L66 70 Z" fill="#6b7d74" stroke="#1c2622" stroke-width="2.5"/>
            <!-- 切通しの みち（すきま） -->
            <path d="M54 70 L54 24 Q60 18 66 24 L66 70 Z" fill="#c9d3d8" stroke="#1c2622" stroke-width="1.5"/>
            <!-- こけ（苔） -->
            <ellipse cx="36" cy="52" rx="7" ry="4" fill="#7a9a6a" opacity=".8"/>
            <ellipse cx="84" cy="48" rx="6" ry="3.5" fill="#7a9a6a" opacity=".8"/>
            <!-- 顔 -->
            <circle cx="60" cy="94" r="26" fill="#fff3cf" stroke="#1c2622" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="100" rx="5" ry="3.4" fill="#ffb070" opacity=".55"/>
            <ellipse cx="74" cy="100" rx="5" ry="3.4" fill="#ffb070" opacity=".55"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="94" rx="3.6" ry="5" fill="#1c2622"/>
              <ellipse cx="69" cy="94" rx="3.6" ry="5" fill="#1c2622"/>
              <circle cx="52.3" cy="91.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="91.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 108 Q60 113 67 108" stroke="#17211d" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  nisuji: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- からだ（直垂ふう） -->
            <path d="M40 118 L44 100 L76 100 L80 118 Z" fill="#3a2e14" stroke="#2a2010" stroke-width="2"/>
            <!-- 二つ引き両の紋（頭上の丸） -->
            <circle cx="60" cy="46" r="30" fill="#3a2e14" stroke="#2a2010" stroke-width="2.5"/>
            <rect x="34" y="37" width="52" height="7" rx="1.5" fill="#f5f0dc"/>
            <rect x="34" y="51" width="52" height="7" rx="1.5" fill="#f5f0dc"/>
            <!-- 顔 -->
            <circle cx="60" cy="94" r="26" fill="#fff3cf" stroke="#2a2010" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="100" rx="5" ry="3.4" fill="#ffb070" opacity=".55"/>
            <ellipse cx="74" cy="100" rx="5" ry="3.4" fill="#ffb070" opacity=".55"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="94" rx="3.6" ry="5" fill="#2a2010"/>
              <ellipse cx="69" cy="94" rx="3.6" ry="5" fill="#2a2010"/>
              <circle cx="52.3" cy="91.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="91.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 108 Q60 113 67 108" stroke="#241c08" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  taitou: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- からだ（洋装ふう） -->
            <path d="M40 118 L44 100 L76 100 L80 118 Z" fill="#2a3550" stroke="#1c2436" stroke-width="2"/>
            <!-- 対等な旗が2本ならぶ意匠（頭上の丸） -->
            <circle cx="60" cy="46" r="30" fill="#8a4212" stroke="#2a1c0c" stroke-width="2.5"/>
            <line x1="46" y1="30" x2="46" y2="60" stroke="#fdf2dc" stroke-width="3"/>
            <path d="M46 32 L60 37 L46 42 Z" fill="#fdf2dc"/>
            <line x1="74" y1="30" x2="74" y2="60" stroke="#fdf2dc" stroke-width="3"/>
            <path d="M74 32 L60 37 L74 42 Z" fill="#fdf2dc"/>
            <!-- 顔 -->
            <circle cx="60" cy="94" r="26" fill="#fff3cf" stroke="#2a1c0c" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="46" cy="100" rx="5" ry="3.4" fill="#ffb070" opacity=".55"/>
            <ellipse cx="74" cy="100" rx="5" ry="3.4" fill="#ffb070" opacity=".55"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="51" cy="94" rx="3.6" ry="5" fill="#2a1c0c"/>
              <ellipse cx="69" cy="94" rx="3.6" ry="5" fill="#2a1c0c"/>
              <circle cx="52.3" cy="91.5" r="1.2" fill="#fff"/>
              <circle cx="70.3" cy="91.5" r="1.2" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 108 Q60 113 67 108" stroke="#241605" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  zukin: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- からだ（もんぺふう） -->
            <path d="M40 118 L44 100 L76 100 L80 118 Z" fill="#3a3428" stroke="#241f18" stroke-width="2"/>
            <!-- 防空頭巾（頭を包む丸いフード） -->
            <path d="M30 72 Q28 30 60 27 Q92 30 90 72 Q90 90 75 97 L45 97 Q30 90 30 72 Z" fill="#5a4a26" stroke="#2a2418" stroke-width="2.5"/>
            <!-- キルティングの縦線ステッチ -->
            <path d="M45 33 Q41 60 45 94" stroke="#a89568" stroke-width="1.6" fill="none" opacity=".7"/>
            <path d="M60 28 L60 96" stroke="#a89568" stroke-width="1.6" fill="none" opacity=".7"/>
            <path d="M75 33 Q79 60 75 94" stroke="#a89568" stroke-width="1.6" fill="none" opacity=".7"/>
            <!-- あご紐 -->
            <path d="M44 88 Q60 100 76 88" stroke="#2a2418" stroke-width="2" fill="none"/>
            <!-- 顔 -->
            <circle cx="60" cy="92" r="22" fill="#f0ead0" stroke="#2a2418" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="48" cy="97" rx="4.6" ry="3.2" fill="#d8a878" opacity=".55"/>
            <ellipse cx="72" cy="97" rx="4.6" ry="3.2" fill="#d8a878" opacity=".55"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="52" cy="91" rx="3.4" ry="4.6" fill="#2a2418"/>
              <ellipse cx="68" cy="91" rx="3.4" ry="4.6" fill="#2a2418"/>
              <circle cx="53.2" cy="88.6" r="1.1" fill="#fff"/>
              <circle cx="69.2" cy="88.6" r="1.1" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 104 Q60 108 67 104" stroke="#241f10" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  honami: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- からだ（稲束ふう） -->
            <path d="M42 116 L46 96 L74 96 L78 116 Z" fill="#c8a832" stroke="#16260f" stroke-width="2"/>
            <!-- 稲穂の頭（黄金の粒が垂れる） -->
            <path d="M32 70 Q30 34 60 30 Q90 34 88 70 Q88 86 74 94 L46 94 Q32 86 32 70 Z" fill="#f3d968" stroke="#c8a832" stroke-width="2.5"/>
            <!-- 垂れる稲穂の粒 -->
            <g fill="#e0c04a" stroke="#c8a832" stroke-width="1">
              <ellipse cx="38" cy="42" rx="4" ry="6" transform="rotate(-25 38 42)"/>
              <ellipse cx="34" cy="54" rx="4" ry="6" transform="rotate(-15 34 54)"/>
              <ellipse cx="82" cy="42" rx="4" ry="6" transform="rotate(25 82 42)"/>
              <ellipse cx="86" cy="54" rx="4" ry="6" transform="rotate(15 86 54)"/>
              <ellipse cx="60" cy="28" rx="4.2" ry="6.5"/>
            </g>
            <!-- 緑の葉 -->
            <path d="M60 30 Q48 18 38 24" stroke="#5a9048" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M60 30 Q72 18 82 24" stroke="#5a9048" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- 顔 -->
            <circle cx="60" cy="92" r="22" fill="#fffaea" stroke="#23331c" stroke-width="2.5"/>
            <!-- ほっぺ -->
            <ellipse cx="48" cy="97" rx="4.6" ry="3.2" fill="#e8a878" opacity=".55"/>
            <ellipse cx="72" cy="97" rx="4.6" ry="3.2" fill="#e8a878" opacity=".55"/>
            <!-- め -->
            <g class="eyes">
              <ellipse cx="52" cy="91" rx="3.4" ry="4.6" fill="#23331c"/>
              <ellipse cx="68" cy="91" rx="3.4" ry="4.6" fill="#23331c"/>
              <circle cx="53.2" cy="88.6" r="1.1" fill="#fff"/>
              <circle cx="69.2" cy="88.6" r="1.1" fill="#fff"/>
            </g>
            <!-- くち -->
            <path d="M53 104 Q60 108 67 104" stroke="#16260f" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  masu: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- 検地竿(かざり) -->
            <line x1="84" y1="40" x2="100" y2="14" stroke="#7a4a20" stroke-width="4" stroke-linecap="round"/>
            <line x1="88" y1="34" x2="94" y2="24" stroke="#f0c880" stroke-width="2" stroke-linecap="round"/>
            <!-- 枡の 上ぶち（開いた口） -->
            <path d="M30 50 L44 36 L104 36 L90 50 Z" fill="#f0c880" stroke="#4a2a10" stroke-width="2.5" stroke-linejoin="round"/>
            <!-- 枡の からだ -->
            <rect x="30" y="50" width="60" height="56" rx="5" fill="#dcae66" stroke="#4a2a10" stroke-width="2.5"/>
            <!-- ますめ(グリッド) -->
            <g stroke="#a87838" stroke-width="1.4" opacity=".55">
              <line x1="50" y1="50" x2="50" y2="106"/>
              <line x1="70" y1="50" x2="70" y2="106"/>
              <line x1="30" y1="70" x2="90" y2="70"/>
              <line x1="30" y1="88" x2="90" y2="88"/>
            </g>
            <!-- かどの 木組み -->
            <g fill="#4a2a10">
              <rect x="30" y="50" width="6" height="6"/>
              <rect x="84" y="50" width="6" height="6"/>
              <rect x="30" y="100" width="6" height="6"/>
              <rect x="84" y="100" width="6" height="6"/>
            </g>
            <!-- かお -->
            <circle cx="60" cy="86" r="19" fill="#fff8e6" stroke="#4a2a10" stroke-width="2.5"/>
            <ellipse cx="49" cy="91" rx="4.2" ry="3" fill="#e8926a" opacity=".55"/>
            <ellipse cx="71" cy="91" rx="4.2" ry="3" fill="#e8926a" opacity=".55"/>
            <g class="eyes">
              <ellipse cx="53" cy="84" rx="3.2" ry="4.3" fill="#4a2a10"/>
              <ellipse cx="67" cy="84" rx="3.2" ry="4.3" fill="#4a2a10"/>
              <circle cx="54.1" cy="81.8" r="1" fill="#fff"/>
              <circle cx="68.1" cy="81.8" r="1" fill="#fff"/>
            </g>
            <path d="M52 96 Q60 100 68 96" stroke="#4a2a10" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  nishiki: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- 藍色の 段（いちばん下） -->
            <path d="M30 108 L34 82 L86 82 L90 108 Z" fill="#2a4a6a" stroke="#182a3c" stroke-width="2.2" stroke-linejoin="round"/>
            <!-- 紅の 段（まんなか） -->
            <path d="M36 82 L40 58 L80 58 L84 82 Z" fill="#c23b3b" stroke="#182a3c" stroke-width="2.2" stroke-linejoin="round"/>
            <!-- 山吹の 段（いちばん上） -->
            <path d="M42 58 L45 38 L75 38 L78 58 Z" fill="#e8b830" stroke="#182a3c" stroke-width="2.2" stroke-linejoin="round"/>
            <!-- かお -->
            <circle cx="60" cy="92" r="20" fill="#fdf8ec" stroke="#182a3c" stroke-width="2.5"/>
            <ellipse cx="49" cy="97" rx="4.4" ry="3" fill="#e8926a" opacity=".55"/>
            <ellipse cx="71" cy="97" rx="4.4" ry="3" fill="#e8926a" opacity=".55"/>
            <g class="eyes">
              <ellipse cx="53" cy="89" rx="3.3" ry="4.4" fill="#182a3c"/>
              <ellipse cx="67" cy="89" rx="3.3" ry="4.4" fill="#182a3c"/>
              <circle cx="54.2" cy="86.7" r="1.05" fill="#fff"/>
              <circle cx="68.2" cy="86.7" r="1.05" fill="#fff"/>
            </g>
            <path d="M52 101 Q60 105 68 101" stroke="#182a3c" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  tawara: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- 俵の からだ（たる型） -->
            <path d="M34 108 Q30 70 34 45 Q60 34 86 45 Q90 70 86 108 Q60 118 34 108 Z" fill="#d4b86a" stroke="#5a3a1a" stroke-width="2.4"/>
            <!-- 縄の むすび目（3本） -->
            <g stroke="#7a2a3a" stroke-width="3.4" fill="none">
              <path d="M32 58 Q60 66 88 58"/>
              <path d="M31 80 Q60 88 89 80"/>
              <path d="M32 102 Q60 110 88 102"/>
            </g>
            <!-- わらの すじ -->
            <g stroke="#a8863a" stroke-width="1.2" opacity=".5">
              <line x1="40" y1="46" x2="38" y2="106"/>
              <line x1="52" y1="40" x2="50" y2="112"/>
              <line x1="68" y1="40" x2="70" y2="112"/>
              <line x1="80" y1="46" x2="82" y2="106"/>
            </g>
            <!-- かお -->
            <circle cx="60" cy="76" r="19" fill="#fff8e6" stroke="#3a2018" stroke-width="2.5"/>
            <ellipse cx="49" cy="81" rx="4.2" ry="3" fill="#e8926a" opacity=".55"/>
            <ellipse cx="71" cy="81" rx="4.2" ry="3" fill="#e8926a" opacity=".55"/>
            <g class="eyes">
              <ellipse cx="53" cy="73" rx="3.2" ry="4.3" fill="#3a2018"/>
              <ellipse cx="67" cy="73" rx="3.2" ry="4.3" fill="#3a2018"/>
              <circle cx="54.2" cy="70.7" r="1" fill="#fff"/>
              <circle cx="68.2" cy="70.7" r="1" fill="#fff"/>
            </g>
            <path d="M52 86 Q60 90 68 86" stroke="#3a2018" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  hayate: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="26" ry="6" fill="rgba(20,20,30,.18)"/>
            <!-- 新幹線の からだ（先頭車両ふう、丸い ノーズ） -->
            <path d="M30 110 Q24 68 42 46 Q60 32 78 46 Q96 68 90 110 Q60 120 30 110 Z" fill="#f4fafd" stroke="#1a5ca8" stroke-width="2.4"/>
            <!-- 青い ライン -->
            <path d="M27 90 Q60 99 93 90" stroke="#1a5ca8" stroke-width="5" fill="none" stroke-linecap="round"/>
            <!-- 赤い ライン -->
            <path d="M28 99 Q60 108 92 99" stroke="#e0472f" stroke-width="4" fill="none" stroke-linecap="round"/>
            <!-- かお -->
            <circle cx="60" cy="74" r="18" fill="#fff8e6" stroke="#1a5ca8" stroke-width="2.5"/>
            <ellipse cx="49" cy="79" rx="4" ry="2.8" fill="#e8926a" opacity=".5"/>
            <ellipse cx="71" cy="79" rx="4" ry="2.8" fill="#e8926a" opacity=".5"/>
            <g class="eyes">
              <ellipse cx="53" cy="71" rx="3.1" ry="4.1" fill="#0e2f4a"/>
              <ellipse cx="67" cy="71" rx="3.1" ry="4.1" fill="#0e2f4a"/>
              <circle cx="54.1" cy="68.9" r="1" fill="#fff"/>
              <circle cx="68.1" cy="68.9" r="1" fill="#fff"/>
            </g>
            <path d="M52 84 Q60 88 68 84" stroke="#0e2f4a" fill="none" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  chou: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="120" rx="30" ry="6" fill="rgba(60,100,20,.18)"/>
            <!-- しょっかく -->
            <path d="M46 30 Q38 10 30 6" stroke="#3d7a26" stroke-width="2.4" fill="none" stroke-linecap="round"/>
            <circle cx="30" cy="6" r="4" fill="#3d7a26"/>
            <path d="M74 30 Q82 10 90 6" stroke="#3d7a26" stroke-width="2.4" fill="none" stroke-linecap="round"/>
            <circle cx="90" cy="6" r="4" fill="#3d7a26"/>
            <!-- からだ（アオムシふう、ふしを 3つ） -->
            <ellipse cx="60" cy="102" rx="34" ry="24" fill="#8fd45f" stroke="#3d7a26" stroke-width="2"/>
            <ellipse cx="60" cy="68" rx="30" ry="24" fill="#9adf6c" stroke="#3d7a26" stroke-width="2"/>
            <ellipse cx="60" cy="40" rx="26" ry="24" fill="#a8e87c" stroke="#3d7a26" stroke-width="2"/>
            <!-- もようの てん -->
            <circle cx="40" cy="66" r="3.4" fill="#f4d84a"/>
            <circle cx="80" cy="66" r="3.4" fill="#f4d84a"/>
            <circle cx="42" cy="100" r="3.4" fill="#f4d84a"/>
            <circle cx="78" cy="100" r="3.4" fill="#f4d84a"/>
            <!-- ほっぺ -->
            <ellipse cx="42" cy="46" rx="6" ry="4" fill="#f8b8b0" opacity=".7"/>
            <ellipse cx="78" cy="46" rx="6" ry="4" fill="#f8b8b0" opacity=".7"/>
            <!-- め -->
            <g class="eyes">
              <circle cx="48" cy="38" r="4.6" fill="#2c2015"/>
              <circle cx="72" cy="38" r="4.6" fill="#2c2015"/>
            </g>
            <!-- くち -->
            <path d="M52 50 Q60 56 68 50" stroke="#245214" fill="none" stroke-width="2.2" stroke-linecap="round"/>
            <!-- ちいさな あし -->
            <path d="M32 112 q-6 6 -10 6 M50 122 q-2 7 -4 9 M70 122 q2 7 4 9 M88 112 q6 6 10 6" stroke="#3d7a26" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>`,
  iromizu: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="122" rx="28" ry="6" fill="rgba(10,50,60,.15)"/>
            <defs>
              <clipPath id="bodyClip">
                <path d="M60 20 C40 20 25 42 25 68 C25 98 40 118 60 118 C80 118 95 98 95 68 C95 42 80 20 60 20 Z"/>
              </clipPath>
            </defs>
            <path d="M60 20 C40 20 25 42 25 68 C25 98 40 118 60 118 C80 118 95 98 95 68 C95 42 80 20 60 20 Z" fill="#f5fdfb" stroke="#163044" stroke-width="2.5"/>
            <g clip-path="url(#bodyClip)">
              <rect x="20" y="20" width="80" height="46" fill="#3f74c2"/>
              <path d="M20 66 Q60 56 100 66 L100 120 L20 120 Z" fill="#e2536e"/>
              <path d="M20 63 Q60 53 100 63" stroke="#fff" stroke-width="2" fill="none" opacity=".5"/>
            </g>
            <circle cx="60" cy="46" r="23" fill="#fff8ec" stroke="#163044" stroke-width="2.5"/>
            <ellipse cx="46" cy="52" rx="5.5" ry="3.4" fill="#ffcfa0" opacity=".55"/>
            <ellipse cx="74" cy="52" rx="5.5" ry="3.4" fill="#ffcfa0" opacity=".55"/>
            <g class="eyes">
              <circle cx="51" cy="44" r="5.2" fill="#fff"/>
              <circle cx="69" cy="44" r="5.2" fill="#fff"/>
              <circle cx="51.6" cy="44.6" r="3" fill="#0d3640"/>
              <circle cx="69.6" cy="44.6" r="3" fill="#0d3640"/>
              <circle cx="52.8" cy="42.8" r="1" fill="#fff"/>
              <circle cx="70.8" cy="42.8" r="1" fill="#fff"/>
            </g>
            <path d="M48 58 Q60 65 72 58" fill="none" stroke="#163044" stroke-width="2.2" stroke-linecap="round"/>
            <!-- ラボゴーグル -->
            <path d="M32 30 Q60 18 88 30" fill="none" stroke="#8a5aa8" stroke-width="4" stroke-linecap="round"/>
            <circle cx="38" cy="31" r="6" fill="none" stroke="#8a5aa8" stroke-width="3"/>
            <circle cx="82" cy="31" r="6" fill="none" stroke="#8a5aa8" stroke-width="3"/>
          </svg>`,
  uzu: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="122" rx="28" ry="6" fill="rgba(0,0,0,.25)"/>
            <circle cx="60" cy="70" r="42" fill="#2c2210" stroke="#ffb066" stroke-width="2.5"/>
            <path d="M60 70 m0 -34 a34 34 0 0 1 24 58 a24 24 0 0 1 -41 -10 a14 14 0 0 1 20 -14" fill="none" stroke="#e0954a" stroke-width="4" stroke-linecap="round"/>
            <path d="M60 70 m0 -22 a22 22 0 0 1 15 37" fill="none" stroke="#ffce8a" stroke-width="3" stroke-linecap="round" opacity=".8"/>
            <circle cx="60" cy="46" r="24" fill="#fff8ec" stroke="#163044" stroke-width="2.5"/>
            <ellipse cx="46" cy="52" rx="5.5" ry="3.4" fill="#ffb066" opacity=".5"/>
            <ellipse cx="74" cy="52" rx="5.5" ry="3.4" fill="#ffb066" opacity=".5"/>
            <g class="eyes">
              <circle cx="51" cy="44" r="5.2" fill="#fff"/>
              <circle cx="69" cy="44" r="5.2" fill="#fff"/>
              <circle cx="51.6" cy="44.6" r="3" fill="#0d3640"/>
              <circle cx="69.6" cy="44.6" r="3" fill="#0d3640"/>
              <circle cx="52.8" cy="42.8" r="1" fill="#fff"/>
              <circle cx="70.8" cy="42.8" r="1" fill="#fff"/>
            </g>
            <path d="M48 58 Q60 65 72 58" fill="none" stroke="#163044" stroke-width="2.2" stroke-linecap="round"/>
            <circle cx="36" cy="34" r="7" fill="#3a7ab8" stroke="#163044" stroke-width="1.6"/>
            <text x="36" y="38" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">N</text>
            <circle cx="84" cy="34" r="7" fill="#c1442e" stroke="#163044" stroke-width="1.6"/>
            <text x="84" y="38" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">S</text>
            <path d="M55 8 L63 8 L58 18 L65 18 L52 32 L56 20 L49 20 Z" fill="#ffe066" stroke="#a8602a" stroke-width="1"/>
          </svg>`,
  kagami: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="122" rx="28" ry="6" fill="rgba(0,0,0,.15)"/>
            <rect x="54" y="88" width="12" height="30" rx="5" fill="#e0a020" stroke="#a0700a" stroke-width="1.6"/>
            <circle cx="60" cy="62" r="46" fill="#f0a020" opacity=".18"/>
            <circle cx="60" cy="62" r="40" fill="url(#mirrorGrad)" stroke="#e0a020" stroke-width="5"/>
            <defs>
              <radialGradient id="mirrorGrad" cx="38%" cy="32%" r="75%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="45%" stop-color="#cfe8fb"/>
                <stop offset="100%" stop-color="#8fc2e6"/>
              </radialGradient>
            </defs>
            <path d="M30 40 Q45 30 60 38" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity=".8"/>
            <g class="eyes">
              <circle cx="48" cy="60" r="5.6" fill="#fff"/>
              <circle cx="72" cy="60" r="5.6" fill="#fff"/>
              <circle cx="48.6" cy="60.6" r="3.1" fill="#1c3a52"/>
              <circle cx="72.6" cy="60.6" r="3.1" fill="#1c3a52"/>
              <circle cx="49.8" cy="58.8" r="1" fill="#fff"/>
              <circle cx="73.8" cy="58.8" r="1" fill="#fff"/>
            </g>
            <path d="M50 74 Q60 80 70 74" fill="none" stroke="#1c3a52" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M60 6 L64 16 L74 16 L66 22 L69 32 L60 26 L51 32 L54 22 L46 16 L56 16 Z" fill="#ffd166" stroke="#c26a0a" stroke-width="1"/>
          </svg>`,
  kagerou: `<svg class="mascot" viewBox="0 0 120 132" aria-hidden="true">
            <ellipse cx="60" cy="124" rx="30" ry="6" fill="rgba(0,0,0,.13)"/>
            <path d="M60 8 L66 20 L58 20 Z" fill="#e0a020" stroke="#a0700a" stroke-width="1.4"/>
            <path d="M30 100 Q20 70 34 46 Q26 58 40 40 Q36 54 50 34 Q50 48 60 30 Q64 46 72 32 Q70 48 82 40 Q78 56 90 48 Q82 68 90 100 Q75 116 60 116 Q45 116 30 100 Z"
                  fill="url(#kageroGrad)" stroke="#5a4a8f" stroke-width="2.4" opacity=".92"/>
            <defs>
              <linearGradient id="kageroGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#cfe0fb"/>
                <stop offset="55%" stop-color="#9aaeea"/>
                <stop offset="100%" stop-color="#6f6fb0"/>
              </linearGradient>
            </defs>
            <g class="eyes">
              <ellipse cx="48" cy="76" rx="6" ry="7.6" fill="#fff"/>
              <ellipse cx="72" cy="76" rx="6" ry="7.6" fill="#fff"/>
              <circle cx="48.6" cy="76.6" r="3.2" fill="#2a2a52"/>
              <circle cx="72.6" cy="76.6" r="3.2" fill="#2a2a52"/>
              <circle cx="49.8" cy="74.6" r="1" fill="#fff"/>
              <circle cx="73.8" cy="74.6" r="1" fill="#fff"/>
            </g>
            <path d="M52 90 Q60 96 68 90" fill="none" stroke="#3a3a6a" stroke-width="2.2" stroke-linecap="round"/>
            <ellipse cx="60" cy="88" rx="16" ry="9" fill="#ffd8a0" opacity=".4"/>
          </svg>`,
  dandan: `<svg class="mascot" viewBox="0 0 120 132" aria-hidden="true">
            <rect x="52" y="18" width="16" height="70" rx="8" fill="#fdf6ec" stroke="#c9a888" stroke-width="2.4"/>
            <circle cx="60" cy="96" r="26" fill="#fdf6ec" stroke="#c9a888" stroke-width="2.4"/>
            <rect x="55" y="30" width="10" height="58" rx="5" fill="url(#dandanGrad)"/>
            <circle cx="60" cy="96" r="19" fill="url(#dandanGrad)"/>
            <defs>
              <linearGradient id="dandanGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ffb08a"/>
                <stop offset="100%" stop-color="#d9502f"/>
              </linearGradient>
            </defs>
            <g class="eyes">
              <ellipse cx="51" cy="92" rx="5.4" ry="6.8" fill="#fff"/>
              <ellipse cx="69" cy="92" rx="5.4" ry="6.8" fill="#fff"/>
              <circle cx="51.6" cy="92.6" r="2.9" fill="#5a1c00"/>
              <circle cx="69.6" cy="92.6" r="2.9" fill="#5a1c00"/>
            </g>
            <path d="M52 106 Q60 111 68 106" fill="none" stroke="#5a1c00" stroke-width="2" stroke-linecap="round"/>
            <line x1="48" y1="40" x2="48" y2="80" stroke="#c9a888" stroke-width="1.4"/>
            <line x1="42" y1="46" x2="48" y2="46" stroke="#c9a888" stroke-width="1.4"/>
            <line x1="42" y1="58" x2="48" y2="58" stroke="#c9a888" stroke-width="1.4"/>
            <line x1="42" y1="70" x2="48" y2="70" stroke="#c9a888" stroke-width="1.4"/>
          </svg>`,
  shizuku: `<svg class="mascot" viewBox="0 0 120 132" aria-hidden="true">
            <path d="M60 8 C60 8 22 64 22 94 C22 115.5 39 132 60 132 C81 132 98 115.5 98 94 C98 64 60 8 60 8 Z" fill="url(#shizukuGrad)" stroke="#0c5548" stroke-width="2.4"/>
            <defs>
              <linearGradient id="shizukuGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#b8f0e2"/>
                <stop offset="100%" stop-color="#178a76"/>
              </linearGradient>
            </defs>
            <ellipse cx="42" cy="52" rx="7" ry="13" fill="#ffffff" opacity=".4"/>
            <g class="eyes">
              <ellipse cx="49" cy="98" rx="5.4" ry="6.8" fill="#fff"/>
              <ellipse cx="71" cy="98" rx="5.4" ry="6.8" fill="#fff"/>
              <circle cx="49.6" cy="98.6" r="2.9" fill="#0c3a30"/>
              <circle cx="71.6" cy="98.6" r="2.9" fill="#0c3a30"/>
            </g>
            <path d="M50 112 Q60 117 70 112" fill="none" stroke="#0c3a30" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  homura: `<svg class="mascot" viewBox="0 0 120 132" aria-hidden="true">
            <path d="M60 14 C42 34 34 54 34 76 C34 102 46 118 60 118 C74 118 86 102 86 76 C86 60 78 48 70 40 C71 54 64 62 58 60 C53 58 52 50 55 42 C58 34 62 26 60 14 Z" fill="url(#homuraGrad)" stroke="#8a1c0a" stroke-width="2.4"/>
            <defs>
              <linearGradient id="homuraGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ffe08a"/>
                <stop offset="55%" stop-color="#ff7043"/>
                <stop offset="100%" stop-color="#c62828"/>
              </linearGradient>
            </defs>
            <g class="eyes">
              <ellipse cx="51" cy="80" rx="5.4" ry="6.8" fill="#fff"/>
              <ellipse cx="69" cy="80" rx="5.4" ry="6.8" fill="#fff"/>
              <circle cx="51.6" cy="80.6" r="2.9" fill="#5a1200"/>
              <circle cx="69.6" cy="80.6" r="2.9" fill="#5a1200"/>
            </g>
            <path d="M52 94 Q60 99 68 94" fill="none" stroke="#5a1200" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  myaku: `<svg class="mascot" viewBox="0 0 120 132" aria-hidden="true">
            <path d="M60 10 C88 26 98 54 92 82 C87 106 75 122 60 122 C45 122 33 106 28 82 C22 54 32 26 60 10 Z" fill="url(#myakuGrad)" stroke="#1b5e20" stroke-width="2.4"/>
            <path d="M60 24 L60 106 M60 46 L44 34 M60 46 L76 34 M60 66 L42 58 M60 66 L78 58 M60 86 L46 82 M60 86 L74 82" fill="none" stroke="#1b5e20" stroke-width="1.6" stroke-linecap="round" opacity=".55"/>
            <defs>
              <linearGradient id="myakuGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#c5e1a5"/>
                <stop offset="55%" stop-color="#7cb342"/>
                <stop offset="100%" stop-color="#2e7d32"/>
              </linearGradient>
            </defs>
            <g class="eyes">
              <ellipse cx="51" cy="76" rx="5.4" ry="6.8" fill="#fff"/>
              <ellipse cx="69" cy="76" rx="5.4" ry="6.8" fill="#fff"/>
              <circle cx="51.6" cy="76.6" r="2.9" fill="#1b3a0a"/>
              <circle cx="69.6" cy="76.6" r="2.9" fill="#1b3a0a"/>
            </g>
            <path d="M52 90 Q60 95 68 90" fill="none" stroke="#1b3a0a" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
  kodou: `<svg class="mascot" viewBox="0 0 120 120" aria-hidden="true">
            <ellipse cx="60" cy="106" rx="28" ry="6" fill="rgba(120,20,20,.16)"/>
            <circle cx="60" cy="56" r="44" fill="url(#hemoGrad)" stroke="#7a0000" stroke-width="2.4"/>
            <ellipse cx="60" cy="56" rx="18" ry="11" fill="#8a1010" opacity=".3"/>
            <defs>
              <radialGradient id="hemoGrad" cx="35%" cy="28%" r="75%">
                <stop offset="0%" stop-color="#ff8a80"/>
                <stop offset="58%" stop-color="#e53935"/>
                <stop offset="100%" stop-color="#b71c1c"/>
              </radialGradient>
            </defs>
            <g class="eyes">
              <circle cx="48" cy="50" r="6" fill="#fff"/>
              <circle cx="72" cy="50" r="6" fill="#fff"/>
              <circle cx="49" cy="51" r="3" fill="#3a0000"/>
              <circle cx="73" cy="51" r="3" fill="#3a0000"/>
            </g>
            <ellipse cx="42" cy="62" rx="4" ry="2.6" fill="#ffb3ab" opacity=".8"/>
            <ellipse cx="78" cy="62" rx="4" ry="2.6" fill="#ffb3ab" opacity=".8"/>
            <path d="M50 66 Q60 74 70 66" stroke="#5a0000" fill="none" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M20 58 q-10 4 -12 14" stroke="#7a0000" fill="none" stroke-width="5" stroke-linecap="round"/>
            <path d="M100 58 q10 4 12 14" stroke="#7a0000" fill="none" stroke-width="5" stroke-linecap="round"/>
          </svg>`,
  kazami: `<svg class="mascot" viewBox="0 0 120 120" aria-hidden="true">
            <ellipse cx="60" cy="106" rx="28" ry="6" fill="rgba(20,60,90,.16)"/>
            <path d="M58 30 L64 10 L70 30 Z" fill="#1565c0" stroke="#08306b" stroke-width="1.6"/>
            <circle cx="38" cy="68" r="22" fill="url(#kazamiGrad)" stroke="#0d47a1" stroke-width="2.2"/>
            <circle cx="82" cy="66" r="24" fill="url(#kazamiGrad)" stroke="#0d47a1" stroke-width="2.2"/>
            <circle cx="60" cy="52" r="30" fill="url(#kazamiGrad)" stroke="#0d47a1" stroke-width="2.2"/>
            <defs>
              <radialGradient id="kazamiGrad" cx="35%" cy="28%" r="75%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="55%" stop-color="#bfe3f7"/>
                <stop offset="100%" stop-color="#5fa8d3"/>
              </radialGradient>
            </defs>
            <g class="eyes">
              <circle cx="47" cy="52" r="6" fill="#fff"/>
              <circle cx="73" cy="52" r="6" fill="#fff"/>
              <circle cx="48" cy="53" r="3" fill="#0d3060"/>
              <circle cx="74" cy="53" r="3" fill="#0d3060"/>
            </g>
            <ellipse cx="40" cy="64" rx="4" ry="2.6" fill="#ffb3ab" opacity=".75"/>
            <ellipse cx="80" cy="64" rx="4" ry="2.6" fill="#ffb3ab" opacity=".75"/>
            <path d="M50 66 Q60 74 70 66" stroke="#0d3060" fill="none" stroke-width="2.4" stroke-linecap="round"/>
          </svg>`,
  kururu: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="122" rx="28" ry="6" fill="rgba(60,40,0,.16)"/>
            <circle cx="60" cy="72" r="40" fill="#2e7d32" stroke="#1b5e20" stroke-width="2.5"/>
            <path d="M22 74 a38 38 0 0 1 76 0" fill="none" stroke="#ffd54f" stroke-width="4" stroke-linecap="round" opacity=".85"/>
            <path d="M28 86 a32 26 0 0 0 64 0" fill="none" stroke="#ffd54f" stroke-width="3.4" stroke-linecap="round" opacity=".7"/>
            <line x1="97" y1="72" x2="112" y2="58" stroke="#8d6e63" stroke-width="5" stroke-linecap="round"/>
            <circle cx="112" cy="58" r="6.5" fill="#bdbdbd" stroke="#616161" stroke-width="1.6"/>
            <circle cx="60" cy="44" r="23" fill="#fffef2" stroke="#c98a12" stroke-width="2.5"/>
            <ellipse cx="47" cy="50" rx="5" ry="3.2" fill="#ffd54f" opacity=".5"/>
            <ellipse cx="73" cy="50" rx="5" ry="3.2" fill="#ffd54f" opacity=".5"/>
            <g class="eyes">
              <circle cx="51" cy="42" r="5" fill="#fff"/>
              <circle cx="69" cy="42" r="5" fill="#fff"/>
              <circle cx="51.6" cy="42.6" r="2.9" fill="#204020"/>
              <circle cx="69.6" cy="42.6" r="2.9" fill="#204020"/>
              <circle cx="52.8" cy="40.8" r="1" fill="#fff"/>
              <circle cx="70.8" cy="40.8" r="1" fill="#fff"/>
            </g>
            <path d="M48 56 Q60 62 72 56" fill="none" stroke="#204020" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M55 6 L63 6 L58 16 L65 16 L52 30 L56 18 L49 18 Z" fill="#ffd54f" stroke="#c98a12" stroke-width="1"/>
          </svg>`,
  tomoshi: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <ellipse cx="60" cy="122" rx="28" ry="6" fill="rgba(15,50,65,.16)"/>
            <path d="M60 8 C78 26 96 52 92 78 C89 100 76 118 60 118 C44 118 31 100 28 78 C24 52 42 26 60 8 Z" fill="#ff9248" stroke="#c9481b" stroke-width="2.5"/>
            <path d="M60 34 C71 48 80 64 77 80 C75 94 68 104 60 104 C52 104 45 94 43 80 C40 64 49 48 60 34 Z" fill="#ffd54f" opacity=".85"/>
            <g class="eyes">
              <circle cx="50" cy="70" r="6" fill="#fff"/>
              <circle cx="70" cy="70" r="6" fill="#fff"/>
              <circle cx="50.7" cy="70.8" r="3.2" fill="#5a2a00"/>
              <circle cx="70.7" cy="70.8" r="3.2" fill="#5a2a00"/>
              <circle cx="52" cy="68.5" r="1.1" fill="#fff"/>
              <circle cx="72" cy="68.5" r="1.1" fill="#fff"/>
            </g>
            <path d="M50 86 Q60 92 70 86" fill="none" stroke="#5a2a00" stroke-width="2.2" stroke-linecap="round"/>
            <circle cx="45" cy="20" r="2.6" fill="#ffe082"/>
            <circle cx="78" cy="17" r="2.1" fill="#ffe082"/>
            <circle cx="61" cy="6" r="1.7" fill="#ffe082"/>
          </svg>`,
  pokka: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <g stroke="#ffb74d" stroke-width="4" stroke-linecap="round" opacity=".85">
              <line x1="60" y1="6" x2="60" y2="18"/>
              <line x1="60" y1="114" x2="60" y2="126"/>
              <line x1="6" y1="66" x2="18" y2="66"/>
              <line x1="102" y1="66" x2="114" y2="66"/>
              <line x1="20" y1="26" x2="28" y2="34"/>
              <line x1="100" y1="26" x2="92" y2="34"/>
              <line x1="20" y1="106" x2="28" y2="98"/>
              <line x1="100" y1="106" x2="92" y2="98"/>
            </g>
            <circle cx="60" cy="66" r="42" fill="url(#pokkaGrad)" stroke="#e8791e" stroke-width="2.5"/>
            <defs>
              <radialGradient id="pokkaGrad" cx="40%" cy="35%">
                <stop offset="0%" stop-color="#fff3c4"/>
                <stop offset="55%" stop-color="#ffcb6b"/>
                <stop offset="100%" stop-color="#f2900f"/>
              </radialGradient>
            </defs>
            <g class="eyes">
              <circle cx="48" cy="66" r="6" fill="#fff"/>
              <circle cx="72" cy="66" r="6" fill="#fff"/>
              <circle cx="48.7" cy="66.8" r="3.2" fill="#7a3b00"/>
              <circle cx="72.7" cy="66.8" r="3.2" fill="#7a3b00"/>
            </g>
            <path d="M48 80 Q60 88 72 80" fill="none" stroke="#7a3b00" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="42" cy="76" r="5" fill="#ff8a65" opacity=".55"/>
            <circle cx="78" cy="76" r="5" fill="#ff8a65" opacity=".55"/>
          </svg>`,
  hibiki: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <g stroke="#c98ae0" stroke-width="4" stroke-linecap="round" opacity=".85">
              <path d="M60 6 Q66 14 60 20" fill="none"/>
              <path d="M60 114 Q54 122 60 128" fill="none"/>
              <path d="M6 66 Q14 60 20 66" fill="none"/>
              <path d="M102 66 Q108 72 114 66" fill="none"/>
              <path d="M20 26 Q28 30 26 38" fill="none"/>
              <path d="M100 26 Q92 30 94 38" fill="none"/>
              <path d="M20 106 Q28 102 26 94" fill="none"/>
              <path d="M100 106 Q92 102 94 94" fill="none"/>
            </g>
            <circle cx="60" cy="66" r="42" fill="url(#hibikiGrad)" stroke="#6a2088" stroke-width="2.5"/>
            <defs>
              <radialGradient id="hibikiGrad" cx="40%" cy="35%">
                <stop offset="0%" stop-color="#f6e3ff"/>
                <stop offset="55%" stop-color="#c98ae0"/>
                <stop offset="100%" stop-color="#8a3fae"/>
              </radialGradient>
            </defs>
            <g class="eyes">
              <circle cx="48" cy="66" r="6" fill="#fff"/>
              <circle cx="72" cy="66" r="6" fill="#fff"/>
              <circle cx="48.7" cy="66.8" r="3.2" fill="#4a1a66"/>
              <circle cx="72.7" cy="66.8" r="3.2" fill="#4a1a66"/>
            </g>
            <path d="M48 80 Q60 88 72 80" fill="none" stroke="#4a1a66" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="42" cy="76" r="5" fill="#e8703f" opacity=".5"/>
            <circle cx="78" cy="76" r="5" fill="#e8703f" opacity=".5"/>
          </svg>`,
  mio: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <g stroke="#5fc99a" stroke-width="4" stroke-linecap="round" opacity=".85">
              <path d="M60 6 Q66 14 60 20" fill="none"/>
              <path d="M60 114 Q54 122 60 128" fill="none"/>
              <path d="M6 66 Q14 60 20 66" fill="none"/>
              <path d="M102 66 Q108 72 114 66" fill="none"/>
              <path d="M20 26 Q28 30 26 38" fill="none"/>
              <path d="M100 26 Q92 30 94 38" fill="none"/>
              <path d="M20 106 Q28 102 26 94" fill="none"/>
              <path d="M100 106 Q92 102 94 94" fill="none"/>
            </g>
            <circle cx="60" cy="66" r="42" fill="url(#mioGrad)" stroke="#0f5a3c" stroke-width="2.5"/>
            <defs>
              <radialGradient id="mioGrad" cx="40%" cy="35%">
                <stop offset="0%" stop-color="#d8fff0"/>
                <stop offset="55%" stop-color="#5fc99a"/>
                <stop offset="100%" stop-color="#1f7a5c"/>
              </radialGradient>
            </defs>
            <g class="eyes">
              <circle cx="48" cy="66" r="6" fill="#fff"/>
              <circle cx="72" cy="66" r="6" fill="#fff"/>
              <circle cx="48.7" cy="66.8" r="3.2" fill="#0f4a30"/>
              <circle cx="72.7" cy="66.8" r="3.2" fill="#0f4a30"/>
            </g>
            <path d="M48 80 Q60 88 72 80" fill="none" stroke="#0f4a30" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="42" cy="76" r="5" fill="#e8593f" opacity=".5"/>
            <circle cx="78" cy="76" r="5" fill="#e8593f" opacity=".5"/>
          </svg>`,
  meguru: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <g stroke="#ff9ec0" stroke-width="4" stroke-linecap="round" opacity=".85">
              <path d="M60 6 Q66 14 60 20" fill="none"/>
              <path d="M60 114 Q54 122 60 128" fill="none"/>
              <path d="M6 66 Q14 60 20 66" fill="none"/>
              <path d="M102 66 Q108 72 114 66" fill="none"/>
              <path d="M20 26 Q28 30 26 38" fill="none"/>
              <path d="M100 26 Q92 30 94 38" fill="none"/>
              <path d="M20 106 Q28 102 26 94" fill="none"/>
              <path d="M100 106 Q92 102 94 94" fill="none"/>
            </g>
            <circle cx="60" cy="66" r="42" fill="url(#meguruGrad)" stroke="#7a1a3a" stroke-width="2.5"/>
            <defs>
              <radialGradient id="meguruGrad" cx="40%" cy="35%">
                <stop offset="0%" stop-color="#fff0f5"/>
                <stop offset="55%" stop-color="#ff9ec0"/>
                <stop offset="100%" stop-color="#d9527a"/>
              </radialGradient>
            </defs>
            <g class="eyes">
              <circle cx="48" cy="66" r="6" fill="#fff"/>
              <circle cx="72" cy="66" r="6" fill="#fff"/>
              <circle cx="48.7" cy="66.8" r="3.2" fill="#7a1a3a"/>
              <circle cx="72.7" cy="66.8" r="3.2" fill="#7a1a3a"/>
            </g>
            <path d="M48 80 Q60 88 72 80" fill="none" stroke="#7a1a3a" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="42" cy="76" r="5" fill="#e8a33d" opacity=".5"/>
            <circle cx="78" cy="76" r="5" fill="#e8a33d" opacity=".5"/>
          </svg>`,
  tsunagu: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <g stroke="#6bb8e8" stroke-width="4" stroke-linecap="round" opacity=".85">
              <path d="M60 6 Q66 14 60 20" fill="none"/>
              <path d="M60 114 Q54 122 60 128" fill="none"/>
              <path d="M6 66 Q14 60 20 66" fill="none"/>
              <path d="M102 66 Q108 72 114 66" fill="none"/>
              <path d="M20 26 Q28 30 26 38" fill="none"/>
              <path d="M100 26 Q92 30 94 38" fill="none"/>
              <path d="M20 106 Q28 102 26 94" fill="none"/>
              <path d="M100 106 Q92 102 94 94" fill="none"/>
            </g>
            <circle cx="60" cy="66" r="42" fill="url(#tsunaguGrad)" stroke="#123f5c" stroke-width="2.5"/>
            <defs>
              <radialGradient id="tsunaguGrad" cx="40%" cy="35%">
                <stop offset="0%" stop-color="#eaf8ff"/>
                <stop offset="55%" stop-color="#6bb8e8"/>
                <stop offset="100%" stop-color="#2a6fa8"/>
              </radialGradient>
            </defs>
            <g class="eyes">
              <circle cx="48" cy="66" r="6" fill="#fff"/>
              <circle cx="72" cy="66" r="6" fill="#fff"/>
              <circle cx="48.7" cy="66.8" r="3.2" fill="#123f5c"/>
              <circle cx="72.7" cy="66.8" r="3.2" fill="#123f5c"/>
            </g>
            <path d="M48 80 Q60 88 72 80" fill="none" stroke="#123f5c" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="42" cy="76" r="5" fill="#f2a154" opacity=".5"/>
            <circle cx="78" cy="76" r="5" fill="#f2a154" opacity=".5"/>
          </svg>`,
  pachi: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <g stroke="#ffcf5c" stroke-width="4" stroke-linecap="round" opacity=".85">
              <path d="M60 6 Q66 14 60 20" fill="none"/>
              <path d="M60 114 Q54 122 60 128" fill="none"/>
              <path d="M6 66 Q14 60 20 66" fill="none"/>
              <path d="M102 66 Q108 72 114 66" fill="none"/>
              <path d="M20 26 Q28 30 26 38" fill="none"/>
              <path d="M100 26 Q92 30 94 38" fill="none"/>
              <path d="M20 106 Q28 102 26 94" fill="none"/>
              <path d="M100 106 Q92 102 94 94" fill="none"/>
            </g>
            <circle cx="60" cy="66" r="42" fill="url(#pachiGrad)" stroke="#6b4a00" stroke-width="2.5"/>
            <defs>
              <radialGradient id="pachiGrad" cx="40%" cy="35%">
                <stop offset="0%" stop-color="#fffbe6"/>
                <stop offset="55%" stop-color="#ffcf5c"/>
                <stop offset="100%" stop-color="#b8860f"/>
              </radialGradient>
            </defs>
            <g class="eyes">
              <circle cx="48" cy="66" r="6" fill="#fff"/>
              <circle cx="72" cy="66" r="6" fill="#fff"/>
              <circle cx="48.7" cy="66.8" r="3.2" fill="#6b4a00"/>
              <circle cx="72.7" cy="66.8" r="3.2" fill="#6b4a00"/>
            </g>
            <path d="M48 80 Q60 88 72 80" fill="none" stroke="#6b4a00" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="42" cy="76" r="5" fill="#e85d75" opacity=".5"/>
            <circle cx="78" cy="76" r="5" fill="#e85d75" opacity=".5"/>
          </svg>`,
  mugyu: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <g stroke="#6cc3ea" stroke-width="4" stroke-linecap="round" opacity=".85">
              <path d="M30 20 Q42 26 40 34" fill="none"/>
              <path d="M90 20 Q78 26 80 34" fill="none"/>
              <path d="M18 60 Q28 62 30 70" fill="none"/>
              <path d="M102 60 Q92 62 90 70" fill="none"/>
              <path d="M26 100 Q36 96 38 88" fill="none"/>
              <path d="M94 100 Q84 96 82 88" fill="none"/>
            </g>
            <circle cx="60" cy="66" r="42" fill="url(#mugyuGrad)" stroke="#0c3346" stroke-width="2.5"/>
            <defs>
              <radialGradient id="mugyuGrad" cx="40%" cy="35%">
                <stop offset="0%" stop-color="#fbfeff"/>
                <stop offset="55%" stop-color="#6cc3ea"/>
                <stop offset="100%" stop-color="#1976a8"/>
              </radialGradient>
            </defs>
            <g class="eyes">
              <circle cx="48" cy="66" r="6" fill="#fff"/>
              <circle cx="72" cy="66" r="6" fill="#fff"/>
              <circle cx="48.7" cy="66.8" r="3.2" fill="#0c3346"/>
              <circle cx="72.7" cy="66.8" r="3.2" fill="#0c3346"/>
            </g>
            <path d="M48 82 Q60 90 72 82" fill="none" stroke="#0c3346" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="42" cy="76" r="5" fill="#ff8a3d" opacity=".45"/>
            <circle cx="78" cy="76" r="5" fill="#ff8a3d" opacity=".45"/>
          </svg>`,
  byun: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <g stroke="#a5d76e" stroke-width="4" stroke-linecap="round" opacity=".85">
              <path d="M10 40 L34 40" fill="none"/>
              <path d="M6 56 L36 56" fill="none"/>
              <path d="M12 72 L34 72" fill="none"/>
              <path d="M86 40 L110 40" fill="none"/>
              <path d="M84 56 L114 56" fill="none"/>
              <path d="M86 72 L108 72" fill="none"/>
            </g>
            <circle cx="60" cy="66" r="42" fill="url(#byunGrad)" stroke="#2d5016" stroke-width="2.5"/>
            <defs>
              <radialGradient id="byunGrad" cx="40%" cy="35%">
                <stop offset="0%" stop-color="#f8fff0"/>
                <stop offset="55%" stop-color="#a5d76e"/>
                <stop offset="100%" stop-color="#4a9e3f"/>
              </radialGradient>
            </defs>
            <ellipse cx="60" cy="28" rx="11" ry="7" fill="none" stroke="#4a9e3f" stroke-width="3.4"/>
            <g class="eyes">
              <circle cx="48" cy="66" r="6" fill="#fff"/>
              <circle cx="72" cy="66" r="6" fill="#fff"/>
              <circle cx="48.7" cy="66.8" r="3.2" fill="#2d5016"/>
              <circle cx="72.7" cy="66.8" r="3.2" fill="#2d5016"/>
            </g>
            <path d="M48 82 Q60 90 72 82" fill="none" stroke="#2d5016" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="42" cy="76" r="5" fill="#ff8a3d" opacity=".45"/>
            <circle cx="78" cy="76" r="5" fill="#ff8a3d" opacity=".45"/>
          </svg>`,
  nanahoshi: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <g stroke="#ff8a72" stroke-width="4" stroke-linecap="round" opacity=".85">
              <path d="M14 34 Q26 30 30 40" fill="none"/>
              <path d="M8 54 L34 52" fill="none"/>
              <path d="M16 74 Q26 78 32 70" fill="none"/>
              <path d="M106 34 Q94 30 90 40" fill="none"/>
              <path d="M112 54 L86 52" fill="none"/>
              <path d="M104 74 Q94 78 88 70" fill="none"/>
            </g>
            <circle cx="60" cy="66" r="42" fill="url(#nanahoshiGrad)" stroke="#7a1f18" stroke-width="2.5"/>
            <defs>
              <radialGradient id="nanahoshiGrad" cx="40%" cy="35%">
                <stop offset="0%" stop-color="#fff5f0"/>
                <stop offset="55%" stop-color="#ff8a72"/>
                <stop offset="100%" stop-color="#d9463a"/>
              </radialGradient>
            </defs>
            <path d="M32 28 Q60 16 88 28 Q88 38 60 40 Q32 38 32 28 Z" fill="#2b1210"/>
            <circle cx="44" cy="50" r="3.2" fill="#2b1210"/>
            <circle cx="76" cy="50" r="3.2" fill="#2b1210"/>
            <circle cx="32" cy="78" r="2.8" fill="#2b1210"/>
            <circle cx="88" cy="78" r="2.8" fill="#2b1210"/>
            <circle cx="60" cy="97" r="2.6" fill="#2b1210"/>
            <g class="eyes">
              <circle cx="48" cy="66" r="6" fill="#fff"/>
              <circle cx="72" cy="66" r="6" fill="#fff"/>
              <circle cx="48.7" cy="66.8" r="3.2" fill="#7a1f18"/>
              <circle cx="72.7" cy="66.8" r="3.2" fill="#7a1f18"/>
            </g>
            <path d="M48 82 Q60 90 72 82" fill="none" stroke="#7a1f18" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="42" cy="76" r="5" fill="#ffce9e" opacity=".5"/>
            <circle cx="78" cy="76" r="5" fill="#ffce9e" opacity=".5"/>
          </svg>`,
  minori: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <g stroke="#ffd699" stroke-width="4" stroke-linecap="round" opacity=".85">
              <path d="M14 40 Q26 36 30 46" fill="none"/>
              <path d="M8 58 L34 56" fill="none"/>
              <path d="M16 78 Q26 82 32 74" fill="none"/>
              <path d="M106 40 Q94 36 90 46" fill="none"/>
              <path d="M112 58 L86 56" fill="none"/>
              <path d="M104 78 Q94 82 88 74" fill="none"/>
            </g>
            <circle cx="60" cy="70" r="42" fill="url(#minoriGrad)" stroke="#8a4a12" stroke-width="2.5"/>
            <defs>
              <radialGradient id="minoriGrad" cx="40%" cy="35%">
                <stop offset="0%" stop-color="#fff5e0"/>
                <stop offset="55%" stop-color="#f2994a"/>
                <stop offset="100%" stop-color="#d97706"/>
              </radialGradient>
            </defs>
            <g fill="#ffd699" stroke="#8a4a12" stroke-width="1.3">
              <ellipse cx="60" cy="16" rx="7" ry="10"/>
              <ellipse cx="60" cy="16" rx="7" ry="10" transform="rotate(72 60 16)"/>
              <ellipse cx="60" cy="16" rx="7" ry="10" transform="rotate(144 60 16)"/>
              <ellipse cx="60" cy="16" rx="7" ry="10" transform="rotate(216 60 16)"/>
              <ellipse cx="60" cy="16" rx="7" ry="10" transform="rotate(288 60 16)"/>
            </g>
            <circle cx="60" cy="16" r="5" fill="#ffb300" stroke="#8a4a12" stroke-width="1.3"/>
            <g class="eyes">
              <circle cx="48" cy="70" r="6" fill="#fff"/>
              <circle cx="72" cy="70" r="6" fill="#fff"/>
              <circle cx="48.7" cy="70.8" r="3.2" fill="#8a4a12"/>
              <circle cx="72.7" cy="70.8" r="3.2" fill="#8a4a12"/>
            </g>
            <path d="M48 86 Q60 94 72 86" fill="none" stroke="#8a4a12" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="42" cy="80" r="5" fill="#ffe0b8" opacity=".6"/>
            <circle cx="78" cy="80" r="5" fill="#ffe0b8" opacity=".6"/>
          </svg>`,
  kyoku: `<svg class="mascot" viewBox="0 0 120 130" aria-hidden="true">
            <g stroke="#e8867a" stroke-width="4" stroke-linecap="round" opacity=".8">
              <path d="M14 40 Q26 36 30 46" fill="none"/>
              <path d="M8 58 L34 56" fill="none"/>
              <path d="M16 78 Q26 82 32 74" fill="none"/>
            </g>
            <g stroke="#7ab0e0" stroke-width="4" stroke-linecap="round" opacity=".8">
              <path d="M106 40 Q94 36 90 46" fill="none"/>
              <path d="M112 58 L86 56" fill="none"/>
              <path d="M104 78 Q94 82 88 74" fill="none"/>
            </g>
            <defs>
              <clipPath id="kyokuLeftHalf"><rect x="16" y="22" width="44" height="88"/></clipPath>
              <clipPath id="kyokuRightHalf"><rect x="60" y="22" width="44" height="88"/></clipPath>
              <radialGradient id="kyokuGradN" cx="30%" cy="35%">
                <stop offset="0%" stop-color="#ffe0da"/>
                <stop offset="55%" stop-color="#e8867a"/>
                <stop offset="100%" stop-color="#c14a3a"/>
              </radialGradient>
              <radialGradient id="kyokuGradS" cx="70%" cy="35%">
                <stop offset="0%" stop-color="#dcecfa"/>
                <stop offset="55%" stop-color="#7ab0e0"/>
                <stop offset="100%" stop-color="#2e6da8"/>
              </radialGradient>
            </defs>
            <circle cx="60" cy="66" r="42" fill="url(#kyokuGradN)" clip-path="url(#kyokuLeftHalf)"/>
            <circle cx="60" cy="66" r="42" fill="url(#kyokuGradS)" clip-path="url(#kyokuRightHalf)"/>
            <circle cx="60" cy="66" r="42" fill="none" stroke="#163a5c" stroke-width="2.5"/>
            <text x="34" y="52" font-size="15" font-weight="700" fill="#fff" text-anchor="middle" font-family="sans-serif">N</text>
            <text x="86" y="52" font-size="15" font-weight="700" fill="#fff" text-anchor="middle" font-family="sans-serif">S</text>
            <g class="eyes">
              <circle cx="48" cy="70" r="6" fill="#fff"/>
              <circle cx="72" cy="70" r="6" fill="#fff"/>
              <circle cx="48.7" cy="70.8" r="3.2" fill="#163a5c"/>
              <circle cx="72.7" cy="70.8" r="3.2" fill="#163a5c"/>
            </g>
            <path d="M48 86 Q60 94 72 86" fill="none" stroke="#163a5c" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="42" cy="80" r="5" fill="#ffb8a8" opacity=".55"/>
            <circle cx="78" cy="80" r="5" fill="#a8d0f0" opacity=".55"/>
          </svg>`,
};
