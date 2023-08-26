import Image from "next/image";
import { Button } from "@/components/ui/button";
import supabase from "../lib/supabase";
export default async function Home() {
  const { data: exercises } = await supabase.from("exercise_library").select();

  return (
    <div className="container px-6">
      <Button className="font-sans uppercase w-full text-xl p-6 border-[2.5px] border-gray-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl tracking-wider bg-primary bg-[url('../../public/diamonds.svg')] bg-repeat text-white my-5 ">
        TESTING THIS BUTTON
      </Button>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quaerat mollitia ipsam hic ab animi voluptas
        ea ratione iure quibusdam quae dignissimos blanditiis obcaecati magni assumenda sed nostrum laboriosam,
        doloribus fuga voluptate commodi qui eaque, vero quo. Ad, quia? Aut possimus ex iste ipsam perspiciatis
        obcaecati esse explicabo ut tempore rem natus itaque quasi provident quia molestias expedita, eaque laudantium
        adipisci aspernatur laborum quae soluta fugit! Facere vel nisi rerum et, ad nihil alias deleniti, magni
        reiciendis officiis consequuntur deserunt! Illo illum obcaecati incidunt corrupti omnis fugiat blanditiis
        reprehenderit. Dolore sequi animi voluptatum repellendus accusantium itaque enim cum suscipit voluptas maxime
        aspernatur, laboriosam excepturi temporibus culpa ut neque praesentium iste sapiente beatae tempora odio sint.
        Nostrum ratione iste dolores maxime nulla consequatur impedit eos veritatis dignissimos ipsa, ex ipsam
        perferendis dicta, repellat quasi voluptates incidunt qui. Eligendi dolor, iusto sit consectetur architecto
        debitis perferendis, nostrum recusandae blanditiis voluptatem dolore? Enim, eligendi! Error ipsum voluptatibus
        aliquam atque ratione, accusantium, numquam eaque dicta hic ducimus, dolore reiciendis consequuntur praesentium
        harum et quia! Corporis ducimus praesentium obcaecati vero, ab eaque autem ipsam sequi excepturi quaerat nihil
        repellat animi delectus exercitationem officiis nobis consequatur vel, impedit voluptatem molestias veritatis
        repellendus. Cumque, mollitia fugiat? Harum eligendi temporibus alias, vitae eos iusto odio doloribus laudantium
        quaerat hic, soluta quod minus dolores non quo dicta delectus. Minima facere rem placeat mollitia laborum
        doloremque repellat error. Repellat accusantium magnam tempore voluptatibus excepturi quae iure, voluptate quo
        assumenda minima vero, architecto ducimus. Veniam ex maiores recusandae praesentium explicabo impedit iste error
        doloribus ullam repudiandae totam perspiciatis, necessitatibus nisi dolorum iusto incidunt asperiores similique
        amet illum cumque. Voluptate, consequatur at. Provident neque, maxime fugiat aspernatur doloremque quisquam
        alias dolorum ea consequatur molestiae minus? Quibusdam nobis ullam, ab, nemo debitis numquam officiis
        asperiores amet temporibus iure, id ipsum beatae cupiditate illo natus sapiente deserunt commodi suscipit
        voluptatibus nisi a dolor saepe eaque. Eveniet non praesentium unde quisquam atque, assumenda veritatis ab est
        iusto distinctio aspernatur quam explicabo dicta adipisci eos necessitatibus excepturi quas rem officia! Ex
        nobis voluptate dolorem repudiandae odit cum quae odio magnam eligendi, culpa eveniet in, tempora inventore
        expedita autem molestias tenetur totam dolore quo nulla? Autem earum exercitationem voluptates mollitia illo et.
        Recusandae dicta consectetur nisi voluptate rerum odio, cum reiciendis qui maiores reprehenderit facere quae
        quos sapiente dignissimos hic eveniet dolorum accusantium repudiandae natus impedit sed alias corrupti magnam
        sunt. Reprehenderit doloribus natus officiis rem et fugit recusandae fugiat cupiditate, molestias minima
        pariatur officia sit est, praesentium quidem hic assumenda eum beatae accusamus magnam ratione ipsa odit rerum
        voluptate! Provident blanditiis laboriosam cupiditate placeat quam. Cum vitae dolores doloremque quasi harum
        rerum voluptatem quaerat magni illo odio laboriosam facilis officia est, omnis atque labore consequatur earum
        repudiandae, voluptatibus fugit at praesentium. Necessitatibus ullam nam officiis vitae aliquam earum sint.
        Excepturi quas quis consectetur maiores accusantium voluptatem? Natus placeat sequi voluptate maiores expedita
        ipsam est recusandae ut, nisi vero exercitationem consequuntur, fugiat ad ipsa iste aperiam maxime nulla omnis
        non? A quae quia nisi dolor aliquid quaerat.
      </p>
    </div>
  );
}
