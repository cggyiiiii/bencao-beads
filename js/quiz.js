/* ===== Body Constitution Quiz ===== */
const quizData = {
  questions: [
    {
      cn: '你平时容易感到疲劳吗？',
      en: 'Do you often feel fatigued?',
      options: [
        { cn: '很少，精力充沛', en: 'Rarely, I feel energetic', scores: { balanced: 3, yangDef: 0, qiDef: 0 } },
        { cn: '经常觉得累，不想动', en: 'Often tired, don\'t want to move', scores: { qiDef: 3, yangDef: 1 } },
        { cn: '容易气短，说话没力气', en: 'Easily short of breath, weak voice', scores: { qiDef: 3 } },
        { cn: '下午特别累，晚上反而精神', en: 'Tired in afternoon, alert at night', scores: { yinDef: 2, qiStag: 1 } }
      ]
    },
    {
      cn: '你怕冷还是怕热？',
      en: 'Are you more sensitive to cold or heat?',
      options: [
        { cn: '特别怕冷，手脚冰凉', en: 'Very cold-sensitive, cold hands/feet', scores: { yangDef: 3 } },
        { cn: '怕热，容易出汗', en: 'Heat-sensitive, sweat easily', scores: { yinDef: 2, dampHeat: 2 } },
        { cn: '不怕冷也不怕热', en: 'Neither cold nor heat sensitive', scores: { balanced: 3 } },
        { cn: '上半身热下半身冷', en: 'Hot upper body, cold lower body', scores: { yangDef: 1, yinDef: 1, qiStag: 1 } }
      ]
    },
    {
      cn: '你的睡眠质量如何？',
      en: 'How is your sleep quality?',
      options: [
        { cn: '入睡快，一觉到天亮', en: 'Fall asleep fast, sleep through', scores: { balanced: 3 } },
        { cn: '难入睡，容易做梦', en: 'Hard to fall asleep, vivid dreams', scores: { qiStag: 2, yinDef: 1 } },
        { cn: '半夜容易醒，醒后难入睡', en: 'Wake up at night, hard to fall back', scores: { yinDef: 2, bloodSta: 1 } },
        { cn: '嗜睡，怎么睡都不够', en: 'Always sleepy, never enough sleep', scores: { phlegmDamp: 2, qiDef: 1 } }
      ]
    },
    {
      cn: '你的消化情况怎样？',
      en: 'How is your digestion?',
      options: [
        { cn: '胃口好，消化正常', en: 'Good appetite, normal digestion', scores: { balanced: 3 } },
        { cn: '容易胀气，吃一点就饱', en: 'Bloated easily, full after small meals', scores: { qiStag: 2, qiDef: 1 } },
        { cn: '经常拉肚子，不能吃凉的', en: 'Frequent diarrhea, can\'t eat cold food', scores: { yangDef: 3 } },
        { cn: '口苦口臭，大便粘腻', en: 'Bitter taste, bad breath, sticky stool', scores: { dampHeat: 3 } }
      ]
    },
    {
      cn: '你的情绪状态如何？',
      en: 'How would you describe your mood?',
      options: [
        { cn: '心态平和，很少焦虑', en: 'Calm and rarely anxious', scores: { balanced: 3 } },
        { cn: '容易焦虑、紧张、叹气', en: 'Easily anxious, tense, sigh often', scores: { qiStag: 3 } },
        { cn: '容易生气、烦躁', en: 'Easily angry and irritable', scores: { dampHeat: 1, qiStag: 2 } },
        { cn: '情绪低落，容易伤感', en: 'Low mood, easily saddened', scores: { qiDef: 1, qiStag: 2 } }
      ]
    },
    {
      cn: '你的皮肤状况如何？',
      en: 'How is your skin condition?',
      options: [
        { cn: '皮肤润泽，很少长痘', en: 'Smooth skin, rarely breakout', scores: { balanced: 3 } },
        { cn: '皮肤干燥，容易脱皮', en: 'Dry skin, peeling easily', scores: { yinDef: 2, bloodSta: 1 } },
        { cn: '油腻，容易长痘', en: 'Oily, frequent acne', scores: { dampHeat: 3, phlegmDamp: 1 } },
        { cn: '容易过敏、起疹子', en: 'Easily allergic, rashes', scores: { allergic: 3 } }
      ]
    },
    {
      cn: '你的体型偏向？',
      en: 'What is your body type?',
      options: [
        { cn: '匀称，不胖不瘦', en: 'Balanced, neither fat nor thin', scores: { balanced: 3 } },
        { cn: '偏瘦，吃不胖', en: 'Thin, hard to gain weight', scores: { yinDef: 2, qiDef: 1 } },
        { cn: '容易发胖，尤其腰腹', en: 'Gain weight easily, especially waist', scores: { phlegmDamp: 3 } },
        { cn: '虚胖，肉松软', en: 'Puffy, soft flesh', scores: { qiDef: 2, phlegmDamp: 1 } }
      ]
    },
    {
      cn: '你口渴的情况？',
      en: 'How about your thirst?',
      options: [
        { cn: '正常，渴了就喝', en: 'Normal, drink when thirsty', scores: { balanced: 3 } },
        { cn: '经常口干舌燥', en: 'Often dry mouth and throat', scores: { yinDef: 3 } },
        { cn: '不太爱喝水', en: 'Don\'t like drinking water much', scores: { phlegmDamp: 2, yangDef: 1 } },
        { cn: '喝很多水还是觉得渴', en: 'Still thirsty after drinking a lot', scores: { dampHeat: 2, yinDef: 1 } }
      ]
    },
    {
      cn: '你对季节变化的反应？',
      en: 'How do you react to seasonal changes?',
      options: [
        { cn: '适应力强，换季没问题', en: 'Adapt well, no issues', scores: { balanced: 3 } },
        { cn: '换季容易感冒', en: 'Catch colds during season changes', scores: { qiDef: 2, allergic: 1 } },
        { cn: '一到梅雨天就浑身不舒服', en: 'Uncomfortable during rainy/humid days', scores: { phlegmDamp: 2, dampHeat: 1 } },
        { cn: '冬天特别难熬', en: 'Winter is especially hard', scores: { yangDef: 3 } }
      ]
    }
  ],
  results: {
    balanced: {
      cn: '平和体质', en: 'Balanced Constitution',
      scent: '和香',
      scentEn: 'Harmony Scent',
      emoji: '☯️',
      descCn: '恭喜你！你属于最理想的平和体质。身体各方面功能协调，精力充沛，睡眠好，适应力强。建议佩戴「和香」手串，以天然草本香气维持身心平衡。',
      descEn: 'Congratulations! You have the ideal Balanced Constitution. Your body functions are well-coordinated with good energy and sleep. We recommend the "Harmony Scent" bracelet to maintain your mind-body balance.'
    },
    qiDef: {
      cn: '气虚体质', en: 'Qi Deficiency',
      scent: '正香',
      scentEn: 'Vital Scent',
      emoji: '🌿',
      descCn: '你属于气虚体质，容易疲劳、气短、说话声音小。正香手串选用肉桂、黄芪等温补药材，帮助补气提神，增强体力。',
      descEn: 'You have a Qi Deficiency constitution — easily fatigued, short of breath, soft voice. The "Vital Scent" bracelet uses cinnamon, astragalus and other warming herbs to replenish your vital energy.'
    },
    yangDef: {
      cn: '阳虚体质', en: 'Yang Deficiency',
      scent: '温香',
      scentEn: 'Warming Scent',
      emoji: '🔥',
      descCn: '你属于阳虚体质，特别怕冷、手脚冰凉、容易拉肚子。温香手串选用肉桂、丁香等温阳药材，帮助驱寒暖身。',
      descEn: 'You have a Yang Deficiency constitution — cold-sensitive with cold extremities. The "Warming Scent" bracelet uses cinnamon, clove and warming herbs to dispel cold and warm your body.'
    },
    yinDef: {
      cn: '阴虚体质', en: 'Yin Deficiency',
      scent: '润香',
      scentEn: 'Nourishing Scent',
      emoji: '💧',
      descCn: '你属于阴虚体质，容易口干、皮肤干燥、手心发热。润香手串选用玄参、麦冬等滋阴药材，帮助滋润身体、安神养心。',
      descEn: 'You have a Yin Deficiency constitution — prone to dry mouth, dry skin, and warm palms. The "Nourishing Scent" bracelet uses herbs to moisturize and calm your mind.'
    },
    qiStag: {
      cn: '气郁体质', en: 'Qi Stagnation',
      scent: '舒香',
      scentEn: 'Soothing Scent',
      emoji: '🍃',
      descCn: '你属于气郁体质，容易焦虑紧张、叹气、情绪波动。舒香手串选用紫苏叶、薄荷等疏肝解郁药材，帮助舒缓压力、安定心神。',
      descEn: 'You have a Qi Stagnation constitution — prone to anxiety, sighing, and mood swings. The "Soothing Scent" bracelet uses perilla and mint to relieve stress and calm your spirit.'
    },
    bloodSta: {
      cn: '血瘀体质', en: 'Blood Stasis',
      scent: '通香',
      scentEn: 'Flow Scent',
      emoji: '🌺',
      descCn: '你属于血瘀体质，容易出现黑眼圈、皮肤暗沉、经络不通。通香手串选用玫瑰花、川芎等活血化瘀药材，帮助疏通经络。',
      descEn: 'You have a Blood Stasis constitution — prone to dark circles, dull skin, and poor circulation. The "Flow Scent" bracelet uses rose and ligusticum to promote blood circulation.'
    },
    phlegmDamp: {
      cn: '痰湿体质', en: 'Phlegm-Damp',
      scent: '化香',
      scentEn: 'Cleansing Scent',
      emoji: '🌊',
      descCn: '你属于痰湿体质，容易发胖、身体沉重、皮肤油腻。化香手串选用苍术、薏仁等化湿药材，帮助排湿减脂。',
      descEn: 'You have a Phlegm-Damp constitution — prone to weight gain, heaviness, and oily skin. The "Cleansing Scent" bracelet uses atractylodes and coix seed to dispel dampness.'
    },
    dampHeat: {
      cn: '湿热体质', en: 'Damp-Heat',
      scent: '清香',
      scentEn: 'Purifying Scent',
      emoji: '❄️',
      descCn: '你属于湿热体质，容易长痘、口苦口臭、大便粘腻。清香手串选用灵芝、防风等清热祛湿药材，帮助清热解毒。',
      descEn: 'You have a Damp-Heat constitution — prone to acne, bitter taste, and sticky stool. The "Purifying Scent" bracelet uses lingzhi and saposhnikovia to clear heat and dampness.'
    },
    allergic: {
      cn: '特禀体质', en: 'Allergic Constitution',
      scent: '敏香',
      scentEn: 'Shield Scent',
      emoji: '🛡️',
      descCn: '你属于特禀体质，容易过敏、打喷嚏、皮肤起疹。敏香手串选用防风、苍术等抗敏药材，帮助增强免疫力。',
      descEn: 'You have an Allergic Constitution — prone to allergies, sneezing, and rashes. The "Shield Scent" bracelet uses saposhnikovia and atractylodes to strengthen immunity.'
    }
  }
};

let currentQ = 0;
let scores = {};

function initQuiz() {
  currentQ = 0;
  scores = {};
  renderQuestion();
}

function renderQuestion() {
  const q = quizData.questions[currentQ];
  const total = quizData.questions.length;
  const container = document.getElementById('quiz-content');
  const progress = document.getElementById('quiz-progress-bar');

  progress.style.width = `${((currentQ) / total) * 100}%`;

  container.innerHTML = `
    <div class="quiz-question">
      <p style="font-size:0.85rem;color:var(--gold);letter-spacing:2px;margin-bottom:8px;">${currentQ + 1} / ${total}</p>
      <h2 data-lang="cn">${q.cn}</h2>
      <h2 data-lang="en">${q.en}</h2>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" onclick="selectOption(${i})">
            <span data-lang="cn">${opt.cn}</span>
            <span data-lang="en">${opt.en}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  // Re-apply language
  const isEn = document.body.classList.contains('lang-en');
  container.querySelectorAll('[data-lang="cn"]').forEach(el => el.style.display = isEn ? 'none' : '');
  container.querySelectorAll('[data-lang="en"]').forEach(el => el.style.display = isEn ? '' : 'none');
}

function selectOption(idx) {
  const q = quizData.questions[currentQ];
  const opt = q.options[idx];

  // Add scores
  if (opt.scores) {
    for (const [key, val] of Object.entries(opt.scores)) {
      scores[key] = (scores[key] || 0) + val;
    }
  }

  currentQ++;
  if (currentQ < quizData.questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const progress = document.getElementById('quiz-progress-bar');
  progress.style.width = '100%';

  // Find top constitution
  let topKey = 'balanced';
  let topScore = 0;
  for (const [key, val] of Object.entries(scores)) {
    if (val > topScore) { topScore = val; topKey = key; }
  }

  const result = quizData.results[topKey];
  const container = document.getElementById('quiz-content');
  const isEn = document.body.classList.contains('lang-en');

  container.innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-card">
        <div style="font-size:4rem;margin-bottom:16px;">${result.emoji}</div>
        <div class="quiz-result-type">${isEn ? result.en : result.cn}</div>
        <div class="quiz-result-scent">${isEn ? result.scentEn : '推荐香方：' + result.scent}</div>
        <div class="quiz-result-desc">${isEn ? result.descEn : result.descCn}</div>
      </div>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-whatsapp" onclick="openWhatsApp('${result.cn} ${result.scent}手串')">
          <span data-lang="cn">📲 WhatsApp 咨询下单</span>
          <span data-lang="en">📲 Order via WhatsApp</span>
        </button>
        <button class="btn btn-outline" onclick="initQuiz()">
          <span data-lang="cn">🔄 重新测试</span>
          <span data-lang="en">🔄 Retake Quiz</span>
        </button>
      </div>
      <p style="margin-top:24px;font-size:0.85rem;color:var(--walnut-light);">
        <span data-lang="cn">💡 每条手串均由天然药材手工制作，配方源自中医九种体质理论</span>
        <span data-lang="en">💡 Each bracelet is handcrafted with natural herbs based on TCM constitution theory</span>
      </p>
    </div>
  `;

  // Re-apply language
  container.querySelectorAll('[data-lang="cn"]').forEach(el => el.style.display = isEn ? 'none' : '');
  container.querySelectorAll('[data-lang="en"]').forEach(el => el.style.display = isEn ? '' : 'none');
}

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('quiz-content')) initQuiz();
});
