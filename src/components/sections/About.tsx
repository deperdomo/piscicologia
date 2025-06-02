export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
            👩‍⚕ Sobre mí
          </h2>
          <p className="text-[var(--muted-text)] leading-relaxed mb-6 text-lg">
            Hola, soy <strong>Llenia Monteagudo Rodríguez</strong>, psicóloga especializada en infancia, familias y vínculos.
          </p>
          <p className="text-[var(--muted-text)] leading-relaxed mb-6">
            Trabajo acompañando a niñas, niños y a sus familias cuando las emociones se hacen grandes, cuando los cambios desordenan un poco la casa, y cuando lo que más se necesita no es una solución rápida, sino alguien que escuche, sostenga y oriente con respeto.
          </p>
          <p className="text-[var(--muted-text)] leading-relaxed mb-8">
            Llevo más de 15 años trabajando con infancia y parentalidad, en procesos de duelo, divorcio, inseguridad emocional, miedos, problemas de conducta y desbordes afectivos.
          </p>
            <div className="mb-8">
            <h3 className="text-xl font-bold text-[var(--highlight)] mb-4">💬 ¿Cómo trabajo?</h3>
            <p className="text-[var(--muted-text)] mb-4">
              Creo en una terapia cálida, respetuosa y adaptada a cada familia. No busco "etiquetar" ni corregir desde fuera, sino comprender qué necesita ese niño o niña para sentirse más seguro, más valioso, más libre para ser quien es.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[var(--highlight)] mb-4">📍 Modalidad de trabajo</h3>
            <p className="text-[var(--muted-text)] mb-4">
              Actualmente trabajo en modalidad presencial en Madrid y también online para todo el país.
            </p>
            <p className="text-[var(--text)] font-medium">
              Si quieres saber si puedo ayudarte en tu caso particular, puedes escribirme sin compromiso.
            </p>
          </div>
          
          <a
            href="/sobre-mi"
            className="nav-button bg-[var(--accent)] text-[var(--button-text)] px-6 py-3 rounded-lg hover:bg-[var(--button-hover)] shadow-sm font-semibold inline-flex items-center"
          >
            Conoce más sobre mi trabajo
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        
        <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl p-8">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🤍</div>
            <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
              ¿Por qué elegí esta profesión?
            </h3>
          </div>
          
          <div className="space-y-4 text-[var(--muted-text)]">
            <p>
              Porque crecí sabiendo que cuando un niño tiene alguien que lo ve, lo nombra con ternura y lo acompaña sin miedo a sus emociones, ese niño florece.
            </p>
            <p>
              Y porque las madres y padres también necesitan un lugar sin juicio, donde sentirse acompañados mientras crían, educan y sanan.
            </p>
            <p className="font-medium text-[var(--text)]">
              Este proyecto nació del deseo de dar herramientas reales, de aliviar las culpas innecesarias y de ayudar a construir puentes emocionales más fuertes en las familias.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

