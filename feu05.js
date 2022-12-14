/* ---LABIRYNTHE---

Créez un programme qui trouve le plus court chemin entre l’entrée et la sortie d’un labyrinthe en évitant les obstacles.


Le labyrinthe est transmis en argument du programme. La première ligne du labyrinthe contient les informations pour lire la carte : LIGNESxCOLS, caractère plein, vide, chemin, entrée et sortie du labyrinthe. 


Le but du programme est de remplacer les caractères “vide” par des caractères “chemin” pour représenter le plus court chemin pour traverser le labyrinthe. Un déplacement ne peut se faire que vers le haut, le bas, la droite ou la gauche.

Exemples d’utilisation :
$> cat -e example.map
10x10* o12$
*****2****$
* *   ****$
*   **** *$
* ****   *$
*  *     2$
*  ** *  *$
*     * **$
***  **  *$
1     ****$
**********$

$> ruby exo.rb example.map
10x10* o12
*****2****
* *   **** 
*   **** *
* ****   * 
*  * oooo2
*  **o*  *
*  ooo* **
***o **  *
1ooo  ****
**********
=> SORTIE ATTEINTE EN 12 COUPS !


Vous devez gérer les erreurs / Vous trouverez un générateur de labyrinthe en annexe de cet exercice.

---- ANNEXE : ----

Voici un générateur de labyrinthe écrit en Ruby :


if ARGV.count < 3 || ARGV[2].length < 5
  puts “params needed: height width characters”
else
  height, width, chars, gates = ARGV[0].to_i, ARGV[1].to_i, ARGV[2], ARGV[3].to_i
  entry = rand(width - 4) + 2
  entry2 = rand(width - 4) + 2
  puts("#{height}x#{width}#{ARGV[2]}")
  height.times do |y|
    width.times do |x|
      if y == 0 && x == entry
        print chars[3].chr
      elsif y == height - 1 && x == entry2
        print chars[4].chr
      elsif y.between?(1, height - 2) && x.between?(1, width - 2) && rand(100) > 20
        print chars[1].chr
      else
        print chars[0].chr
      end
    end
    print "\n"
  end
end



*/