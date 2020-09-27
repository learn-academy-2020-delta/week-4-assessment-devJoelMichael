# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.
puts "1:\n"

full_arr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
full_arr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

ef median(array)
  return nil if array.empty?
  sorted = array.sort
  len = sorted.length
  (sorted[(len - 1) / 2] + sorted[len / 2]) / 2.0
end
end

puts median(full_arr1)

# This one was super hard and again, I did not do super well with it. I had some pieces working but the more I added and changed the more broken it got and the more I forgot how to even get back to what I had.

# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.
puts "2:\n"

class Bike 
    def initialize (model, wheels, frame_size)
        @model = model
        @wheels = wheels 
        @frame_size = frame_size
    end

    def get_model
        @model 
    end

    def set_model=(model)
        @model = model
    end

    def get_wheels
        @model 
    end

    def set_wheels=(wheels)
        @wheels = wheels;
    end

    def get_frame_size
        @frame_size 
    end

    def set_frame_size=(frame_size)
        @frame_size = frame_size
    end

    def get_info (model, wheels, frame_size)
        puts "The #{model} has #{wheels} wheels and a #{frame_size}."
    end
end

my_bike = Bike.new("model", "wheels", "frame_size")
my_bike.get_info("Trek bike","2", "168cm frame")

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.
puts "3:\n"

class Bell < Bike 
    def initialize ring
        @ring = ring
    end

    def set_ring
        @ring
    end
    def get_ring
        @ring = ring
    end

    def ring_bell 
        puts "DING DING"
    end
end

my_bike = Bell.new("bell")
my_bike.ring_bell

# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.
puts "4:\n"

class Speedometer < Bike 
    def initialize 
        @speedometer = 0;
    end

    def set_ring
        @speedometer
    end
    def get_ring
        @speedometer = speedometer
    end

    def hold_my_speed 
        puts "#{@speedometer}"
    end
end

my_bike = Speedometer.new
my_bike.hold_my_speed


# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.
puts "5:\n"

class Pedal < Bike
    def initialize speed
        @speed = speed
    end

    def set_pedal_faster
        @speed
    end

    def get_pedal_faster (speed)
    @speed += speed
    end

    def get_brake 
        @speed
    end

    def end_brake (speed)
    if @speed > speed
    @speed =- speed
    else
    @speed = 0
    end
end
end
my_bike = Pedal.new("speed")
my_bike.get_pedal_faster("10")
my_bike.end_brake("12")
# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
