export default function AboutPage() {
  const date = new Date();

  return (
    <main className='flex justify-center blue mt7 f4'>
      <div className='flex flex-column items-center pa3 word-break width-50 tj'>
        <p>
          Цей сайт новин створено студентом Ужгородського національного
          університету. Адміністрація не несе відповідальності за правдивість
          інформації на сторінках сайту. Користувач має сам вирішувати чи
          довіряти йому цьому джерелу інформації.
        </p>
        <p>{date.getFullYear()} © News UA by Andriy Shmalenko</p>
      </div>
    </main>
  );
}
