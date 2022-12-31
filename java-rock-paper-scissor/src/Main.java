// Import libraries
import javax.swing.JFrame;
import javax.swing.ImageIcon;
import javax.swing.JLabel;
import java.awt.Font;
import java.awt.Color;
import java.awt.Image;
import java.awt.event.MouseListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseAdapter;

class Game extends JFrame{
    public static void main(String[] args){
        // Create frame (game window)
        Game game = new Game();
        game.setTitle("Rock Paper Scissor");
        game.setBounds(200, 200, 600, 600); // x, y, width, height
        game.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        game.getContentPane().setBackground(Color.GRAY);
        game.setResizable(false);
        game.setVisible(true);
    }
}