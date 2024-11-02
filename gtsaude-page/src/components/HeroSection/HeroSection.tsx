//Em caso de mudar a imagem desta sessão, ela é chamada dentro do file "tailwind.config.js"

export default function HeroSection (){
  return(
      <div className="pt-24 bg-white">
      <section id="HeroSection"
          className="hidden md:flex w-full h-[70vh] max-h-[800px] max-w-[1800px] mx-auto bg-cover bg-img_bg_hero bg-no-repeat bg-center ">        
      </section>
      <section id="HeroSection"
          className="flex md:hidden w-full h-[80vh] max-h-[800px] max-w-[1800px] mx-auto bg-cover bg-img_bg_hero_mobile bg-no-repeat bg-center ">        
      </section>
      </div>
  )
}
