import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://kilhjgwauabvcqabealm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpbGhqZ3dhdWFidmNxYWJlYWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MTQzMTAsImV4cCI6MjA1NzE5MDMxMH0.N12sBlLyI4I6_ewB1hf5SSNKSG6bLMKBrZSpXaGddHQ'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: Books, error } = await supabase
  .from('Books')
  .select('*')

  for (let Book of Books) {
    let BookList = document.getElementById('Books');
    BookList.innerHTML += `<li>${Book.Title} - ${Book.Author} - ${Book.ISBN}</li>`;
  }
}

getBooks();
