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
    ImageIcon rock_img, paper_img, scissor_img;

    public void setup(){
        // Get images
        rock_img = new ImageIcon(new ImageIcon("src/rock.png").getImage().getScaledInstance(80, 80, Image.SCALE_DEFAULT));
        paper_img = new ImageIcon(new ImageIcon("src/paper.png").getImage().getScaledInstance(80, 80, Image.SCALE_DEFAULT));
        scissor_img = new ImageIcon(new ImageIcon("src/scissor.png").getImage().getScaledInstance(80, 80, Image.SCALE_DEFAULT));

        // Create label
        // Rock label
        JLabel rock_label = new JLabel();
        rock_label.setText("Rock");
        rock_label.setIcon(rock_img); // Set icon
        rock_label.setHorizontalTextPosition(JLabel.CENTER);
        rock_label.setVerticalTextPosition(JLabel.BOTTOM);
        rock_label.setBounds(150, 300, 100, 100);

        // Paper label
        JLabel paper_label = new JLabel();
        paper_label.setText("Paper");
        paper_label.setIcon(paper_img); // Set icon
        paper_label.setHorizontalTextPosition(JLabel.CENTER);
        paper_label.setVerticalTextPosition(JLabel.BOTTOM);
        paper_label.setBounds(250, 300, 100, 100);

        // Scissor label
        JLabel scissor_label = new JLabel();
        scissor_label.setText("Scissor");
        scissor_label.setIcon(scissor_img); // Set icon
        scissor_label.setHorizontalTextPosition(JLabel.CENTER);
        scissor_label.setVerticalTextPosition(JLabel.BOTTOM);
        scissor_label.setBounds(350, 300, 100, 100);

        // Add mouse listener to labels (like buttons)
        rock_label.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                // Call the calculate method
                calculate(rock_label.getText());
            }
        });

        paper_label.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                calculate(paper_label.getText());
            }
        });

        scissor_label.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                calculate(scissor_label.getText());
            }
        });

        // Add components in the frame (game window)
        add(rock_label);
        add(paper_label);
        add(scissor_label);
        setLayout(null);
    }

    public static void main(String[] args){
        // Create frame (game window)
        Game game = new Game();
        game.setTitle("Rock Paper Scissor"); // Window title
        game.setBounds(200, 200, 600, 600); // x, y, width, height
        game.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        game.getContentPane().setBackground(Color.WHITE); // Background color
        game.setup(); // Call setup
        game.setResizable(false); // Not resizable
        game.setVisible(true);
    }
}